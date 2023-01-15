import "./index.css";

import { supabase } from "./lib/supabase/client";
import { render } from "./lib/render";

async function entry() {
  const { data } = await supabase.auth.getUser();

  if (data?.user?.id) {
    const { App } = await import("./app/aapp");
    render(<App user={data.user} />);
  } else {
    const { SignIn } = await import("./app/sign-in");
    render(<SignIn />);
  }
}

entry();
