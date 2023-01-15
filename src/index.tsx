import "./index.css";

import { supabase } from "./lib/supabase/client";
import { render } from "./lib/render";

async function entry() {
  const { data } = await supabase.auth.getUser();

  if (data?.user?.id) {
    const { App } = await import("./app/App");
    render(<App user={data.user} />);
  } else {
    const { Login } = await import("./app/Login");
    render(<Login />);
  }
}

entry();
