import { render as renderPreact, JSX } from "preact";

export function render(node: JSX.Element) {
  const rootElement = document.getElementById("root") as HTMLElement;
  renderPreact(node, rootElement);
}
