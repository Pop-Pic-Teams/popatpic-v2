import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// File ini HANYA boleh dipanggil di dalam API Routes atau Server Actions
// Jangan menggunakan helper ini di Komponen Frontend.
export function createAdminClient() {
    return createSupabaseClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
}