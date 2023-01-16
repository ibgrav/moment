import { IconUser } from "src/icons/icon-user";

export const navHeight = 48;

export function Nav() {
  return (
    <nav
      style={{ height: `${navHeight - 2}px` }}
      className="border-t-2 flex flex-row justify-between p-3 fixed bottom-0 left-0 w-screen"
    >
      <button>
        <IconUser className="h-full" />
      </button>
    </nav>
  );
}
