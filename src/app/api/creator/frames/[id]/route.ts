import { NextResponse, type NextRequest } from 'next/server';
import { getAuthenticatedUser } from '../../../../../features/auth/server/auth-guard';
import { updateFrameByCreator } from '../../../../../features/frames/server/frames-service';
import {
  validateFrameInput,
  isValidPngBuffer,
  parseBase64DataUrl,
  MAX_FRAME_FILE_SIZE,
} from '../../../../../features/frames/server/validation';

/**
 * PATCH /api/creator/frames/[id]
 * Memperbarui data frame atau mengajukan ulang (resubmit) frame yang ditolak.
 */
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { userContext, errorResponse } = await getAuthenticatedUser('Creator');
  if (errorResponse || !userContext) return errorResponse;

  const { id: frameId } = await context.params;

  try {
    const contentType = request.headers.get('content-type') || '';
    let rawName: string | undefined;
    let rawDesc: string | undefined;
    let rawPoseCount: any;
    let rawCategory: string | undefined;
    let rawTags: any;
    let fileBuffer: Buffer | undefined;
    let rawStatus: any;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      rawName = formData.get('name') as string;
      rawDesc = formData.get('description') as string;
      rawPoseCount = formData.get('poseCount');
      rawCategory = formData.get('category') as string;
      rawStatus = formData.get('status') as string;

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
      const body = await request.json();
      rawName = body.name;
      rawDesc = body.description || body.desc;
      rawPoseCount = body.poseCount || body.count;
      rawCategory = body.category;
      rawTags = body.tags;
      rawStatus = body.status;

      if (body.image && body.image.startsWith('data:')) {
        const parsed = parseBase64DataUrl(body.image);
        if (parsed) {
          fileBuffer = parsed.buffer;
        } else {
          return NextResponse.json(
            { success: false, error: 'Invalid image URL format.' },
            { status: 400 }
          );
        }
      }
    }

    // Validasi file baru jika disertakan
    if (fileBuffer) {
      if (fileBuffer.length > MAX_FRAME_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            error: `File size exceeds the maximum limit of (${MAX_FRAME_FILE_SIZE / (1024 * 1024)} MB).`,
          },
          { status: 400 }
        );
      }
      if (!isValidPngBuffer(fileBuffer)) {
        return NextResponse.json(
          {
            success: false,
            error: 'The frame asset must be a valid transparent PNG file.',
          },
          { status: 400 }
        );
      }
    }

    const validation = validateFrameInput({
      name: rawName,
      description: rawDesc,
      poseCount: rawPoseCount,
      category: rawCategory,
      tags: rawTags,
    });

    if (!validation.valid || !validation.sanitized) {
      return NextResponse.json(
        { success: false, error: validation.error || 'Invalid input data.' },
        { status: 400 }
      );
    }

    const updatedFrame = await updateFrameByCreator(frameId, userContext.authUserId, {
      name: validation.sanitized.name,
      description: validation.sanitized.description,
      poseCount: validation.sanitized.poseCount,
      category: validation.sanitized.category,
      tags: validation.sanitized.tags,
      imageBuffer: fileBuffer,
      status: rawStatus === 'archived' ? 'archived' : 'pending_review',
    });

    return NextResponse.json({
      success: true,
      message: 'Frame updated successfully and resubmitted for admin verification.',
      frame: updatedFrame,
    });
  } catch (err: any) {
    console.error(`[PATCH /api/creator/frames/${frameId}] Error:`, err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to update frame.' },
      { status: 500 }
    );
  }
}

