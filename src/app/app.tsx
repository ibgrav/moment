import { User } from "@supabase/supabase-js";
import { signout } from "src/lib/supabase/auth";
import { Media } from "./media";

interface AppProps {
  user: User;
}

export function App({ user }: AppProps) {
  return (
    <div className="flex flex-col gap-4">
      <button onClick={signout}>Sign out</button>

      <details>
        <summary>user</summary>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </details>

      <Media />
    </div>
  );
}
