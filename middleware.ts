import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // Verifikasi sesi pengguna saat ini
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const url = request.nextUrl.pathname;

    // Aturan RBAC (Role-Based Access Control)
    // Jika mencoba akses dashboard Admin atau Creator tapi belum login, lempar ke /login
    if (!user && (url.startsWith('/admin') || url.startsWith('/creator'))) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = '/login';
        return NextResponse.redirect(loginUrl);
    }

    // Untuk pengecekan apakah user ini benar-benar Admin aktif atau bukan,
    // dilakukan di dalam layout.tsx masing-masing folder (/app/admin/layout.tsx)
    // dengan melakukan query ke tabel public.users untuk memeriksa field "role" dan "account_status"

    return supabaseResponse;
}

// memastikan middleware hanya berjalan di halaman rute,
// tidak berjalan di file statis (gambar, css, dll) agar performa tetap cepat
export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};