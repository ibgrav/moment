import { Provider } from "@supabase/supabase-js";
import { supabase } from "./client";

export async function signout() {
  await supabase.auth.signOut();
  location.reload();
}

export async function signInWithProvider(provider: Provider) {
  await supabase.auth.signInWithOAuth({ provider });
}
