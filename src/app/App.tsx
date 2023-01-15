import { User } from "@supabase/supabase-js";
import { signout } from "../lib/supabase/auth";

interface AppProps {
  user: User;
}

export function App({ user }: AppProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={signout}>Sign out</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
