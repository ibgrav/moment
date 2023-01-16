import { user } from "src/lib/signals";
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
