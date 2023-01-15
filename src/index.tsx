import "src/index.css";

import { supabase } from "src/lib/supabase/client";
import { render } from "src/lib/render";

async function entry() {
  const { data } = await supabase.auth.getUser();

  if (data?.user?.id) {
    const { App } = await import("./app/app");
    render(<App user={data.user} />);
  } else {
    const { SignIn } = await import("./app/sign-in");
    render(<SignIn />);
  }
}

entry();
