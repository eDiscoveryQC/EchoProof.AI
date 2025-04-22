import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);         // Should print your project URL
console.log("Supabase Anon Key:", supabaseAnonKey); // Should not be undefined

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
