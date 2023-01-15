import "src/index.css";

import { render } from "preact";
import { supabase } from "src/lib/supabase/client";
import { App } from "./app/app";
import { user } from "./lib/signals";

async function entry() {
  const { data } = await supabase.auth.getUser();
  if (data.user) user.value = data.user;

  const rootElement = document.getElementById("root") as HTMLElement;
  render(<App />, rootElement);
}

entry();
