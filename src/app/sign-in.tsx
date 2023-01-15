import type { Provider } from "@supabase/supabase-js";
import { signInWithProvider } from "../lib/supabase/auth";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import github from "../assets/github.png";

interface ProviderButton {
  label: string;
  image: string;
  provider: Provider;
}

const buttons: ProviderButton[] = [
  {
    image: google,
    label: "Google",
    provider: "google",
  },
  {
    image: github,
    label: "GitHub",
    provider: "github",
  },
  {
    image: apple,
    label: "Apple",
    provider: "apple",
  },
];

export function SignIn() {
  return (
    <main className="flex flex-col gap-4 py-8 items-center justify-center">
      {buttons.map(({ image, label, provider }) => (
        <button
          key={provider}
          onClick={() => signInWithProvider(provider)}
          className="flex flex-row justify-center align-center gap-4 h-12 w-64 bg-black text-white py-2 px-4 rounded hover:shadow-sm"
        >
          <img className="h-full w-auto" src={image} />
          <span className="leading-8">Sign in with {label}</span>
        </button>
      ))}
    </main>
  );
}
