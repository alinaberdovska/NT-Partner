import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Trūksta Supabase konfigūracijos. Nustatykite VITE_SUPABASE_URL ir VITE_SUPABASE_PUBLISHABLE_KEY (.env arba .env.local) ir iš naujo paleiskite Vite.',
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
