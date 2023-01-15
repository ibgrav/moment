import { createClient } from "@supabase/supabase-js";
import { SUPABASE_API_URL, SUPABASE_PUBLIC_ANON_KEY } from "../constants";

export const supabase = createClient(SUPABASE_API_URL, SUPABASE_PUBLIC_ANON_KEY);
