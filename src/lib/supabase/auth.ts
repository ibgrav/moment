import { Provider } from "@supabase/supabase-js";
import { supabase } from "src/lib/supabase/client";

export async function signout() {
  await supabase.auth.signOut();
  location.reload();
}

export async function signInWithProvider(provider: Provider) {
  const url = new URL(location.href);

  await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: url.origin },
  });
}
