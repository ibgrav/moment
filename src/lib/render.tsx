import { ReactNode, StrictMode } from "react";
import ReactDOM from "react-dom/client";

export function render(children: ReactNode) {
  const rootElement = document.getElementById("root") as HTMLElement;

  const root = ReactDOM.createRoot(rootElement);

  root.render(<StrictMode>{children}</StrictMode>);
}
