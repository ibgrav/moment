import { user } from "src/lib/signals";
import { signout } from "src/lib/supabase/auth";
import { Account } from "./account";
import { Media } from "./media";

export function App() {
  return (
    <div>
      {user.value && <Media />}

      <Account />
    </div>
  );
}
