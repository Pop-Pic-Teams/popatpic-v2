import { NextResponse, type NextRequest } from 'next/server';
import { getAuthenticatedUser } from '../../../../features/auth/server/auth-guard';
import {
  getCreatorFrames,
  createFrameByCreator,
} from '../../../../features/frames/server/frames-service';
import {
  validateFrameInput,
  isValidPngBuffer,
  parseBase64DataUrl,
  MAX_FRAME_FILE_SIZE,
} from '../../../../features/frames/server/validation';

/**
 * GET /api/creator/frames
 * Mengambil daftar seluruh frame milik kreator yang sedang login.
 */
export async function GET() {
  const { userContext, errorResponse } = await getAuthenticatedUser('Creator');
  if (errorResponse || !userContext) return errorResponse;

  try {
    const frames = await getCreatorFrames(userContext.authUserId);
    return NextResponse.json({
      success: true,
      frames,
    });
  } catch (err: any) {
    console.error('[GET /api/creator/frames] Error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to load creator frames' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/creator/frames
 * Mengunggah frame baru oleh kreator terautentikasi.
 * Mendukung format `multipart/form-data` maupun `application/json` (base64 data URL).
 */
export async function POST(request: NextRequest) {
  const { userContext, errorResponse } = await getAuthenticatedUser('Creator');
  if (errorResponse || !userContext) return errorResponse;

  try {
    const contentType = request.headers.get('content-type') || '';
    let rawName: string | undefined;
    let rawDesc: string | undefined;
    let rawPoseCount: any;
    let rawCategory: string | undefined;
    let rawTags: any;
    let fileBuffer: Buffer | null = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      rawName = formData.get('name') as string;
      rawDesc = formData.get('description') as string;
      rawPoseCount = formData.get('poseCount');
      rawCategory = formData.get('category') as string;

      const tagsField = formData.get('tags');
      if (typeof tagsField === 'string') {
        try {
          rawTags = JSON.parse(tagsField);
        } catch {
          rawTags = tagsField.split(',').map((t) => t.trim());
        }
      }

      const file = formData.get('file');
      if (file && typeof file === 'object' && 'arrayBuffer' in file) {
        const arrayBuf = await (file as Blob).arrayBuffer();
        fileBuffer = Buffer.from(arrayBuf);
      }
    } else {
      // JSON body
      const body = await request.json();
      rawName = body.name;
      rawDesc = body.description || body.desc;
      rawPoseCount = body.poseCount || body.count;
      rawCategory = body.category;
      rawTags = body.tags;

      if (body.image) {
        const parsed = parseBase64DataUrl(body.image);
        if (parsed) {
          fileBuffer = parsed.buffer;
        } else if (typeof body.image === 'string' && body.image.startsWith('data:')) {
          return NextResponse.json(
            { success: false, error: 'Invalid image URL format.' },
            { status: 400 }
          );
        }
      }
    }

    // 1. Validasi metadata frame
    const validation = validateFrameInput({
      name: rawName,
      description: rawDesc,
      poseCount: rawPoseCount,
      category: rawCategory,
      tags: rawTags,
    });

    if (!validation.valid || !validation.sanitized) {
      return NextResponse.json(
        { success: false, error: validation.error || 'Invalid frame data.' },
        { status: 400 }
      );
    }

    // 2. Validasi file frame PNG
    if (!fileBuffer) {
      return NextResponse.json(
        { success: false, error: 'PNG frame asset is required' },
        { status: 400 }
      );
    }

    if (fileBuffer.length > MAX_FRAME_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: `File size exceeds the maximum limit of (${MAX_FRAME_FILE_SIZE / (1024 * 1024)} MB).`,
        },
        { status: 400 }
      );
    }

    // Validasi konten biner file (Magic Bytes PNG)
    if (!isValidPngBuffer(fileBuffer)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unsupported file format. The frame asset must be a valid PNG with a transparent alpha channel.',
        },
        { status: 400 }
      );
    }

    // 3. Simpan frame ke database & storage
    // Status awal SELALU 'pending_review' berdasarkan aturan moderasi backend (BR-05)
    const creatorName =
      userContext.profile.full_name ||
      userContext.profile.username ||
      userContext.email.split('@')[0];

    const savedFrame = await createFrameByCreator({
      creatorId: userContext.authUserId,
      creatorName,
      name: validation.sanitized.name,
      description: validation.sanitized.description,
      poseCount: validation.sanitized.poseCount,
      category: validation.sanitized.category,
      tags: validation.sanitized.tags,
      imageBuffer: fileBuffer,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Frame uploaded successfully and is pending admin review',
        frame: savedFrame,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('[POST /api/creator/frames] Error:', err);
    return NextResponse.json(
      { success: false, error: err?.message || 'An error occured while uploading the frame.' },
      { status: 500 }
    );
  }
}

