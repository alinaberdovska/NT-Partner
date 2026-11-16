import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim().replace(/\/+$/, '')
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim()

if (supabaseUrl && !/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(supabaseUrl)) {
  throw new Error(
    'VITE_SUPABASE_URL turi būti pagrindinis Supabase projekto URL, pvz. https://<project-ref>.supabase.co (be /rest/v1 ar /auth/v1).',
  )
}

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Trūksta Supabase konfigūracijos. Nustatykite VITE_SUPABASE_URL ir VITE_SUPABASE_PUBLISHABLE_KEY (.env arba .env.local) ir iš naujo paleiskite Vite.',
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})
