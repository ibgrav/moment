import { Provider } from "@supabase/supabase-js";
import { signInWithProvider } from "../lib/supabase/auth";

interface ProviderButton {
  label: string;
  provider: Provider;
}

const buttons: ProviderButton[] = [
  {
    label: "Google",
    provider: "google",
  },
  {
    label: "GitHub",
    provider: "github",
  },
];

export function Login() {
  return (
    <main className="flex flex-col gap-4 py-4 items-center justify-center">
      {buttons.map(({ label, provider }) => (
        <button
          key={provider}
          onClick={() => signInWithProvider(provider)}
          className="border-2 py-2 px-4 rounded-sm hover:shadow-sm"
        >
          Sign in with {label}
        </button>
      ))}
    </main>
  );
}
