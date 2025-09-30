import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// export type CommitteeMember = {
//   id: string; // UUID
//   name: string;
//   role: string | null;
//   recognition: string | null;
//   image_url: string | null;
//   email: string | null;
//   facebook_url: string | null;
//   linkedin_url: string | null;
//   inserted_at: string; // ISO timestamp
// };
