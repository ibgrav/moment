import type { Provider } from "@supabase/supabase-js";
import { signInWithProvider, signout } from "src/lib/supabase/auth";
import apple from "src/assets/apple.png";
import google from "src/assets/google.png";
import github from "src/assets/github.png";
import { useEffect } from "preact/hooks";
import { user } from "src/lib/signals";

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

export function Account() {
  return (
    <main className="flex flex-col gap-4 py-8 items-center justify-center">
      {user.value ? (
        <button onClick={signout}>Sign out</button>
      ) : (
        <>
          {buttons.map(({ image, label, provider }) => (
            <button
              key={provider}
              onClick={() => signInWithProvider(provider)}
              className="flex flex-row justify-center align-center gap-4 h-12 w-64 bg-black text-white"
            >
              <img loading="lazy" className="h-full w-auto" src={image} />
              <span className="leading-8">Sign in with {label}</span>
            </button>
          ))}
        </>
      )}
    </main>
  );
}
