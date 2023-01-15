import { signInWithProvider } from "../lib/supabase/auth";

export function Login() {
  return (
    <main>
      <button onClick={() => signInWithProvider("google")}>Sign in with Google</button>
    </main>
  );
}
