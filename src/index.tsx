import "./index.css";

import { supabase } from "./lib/supabase/client";
import { render } from "./lib/render";
import { App } from "./app/App";
import { Login } from "./app/Login";

async function entry() {
  const { data } = await supabase.auth.getUser();

  if (data?.user?.id) {
    render(<App user={data.user} />);
  } else {
    render(<Login />);
  }
}

entry();
