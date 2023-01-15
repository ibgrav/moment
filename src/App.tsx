import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={() => setCount((c) => c + 1)}>count {count}</button>
    </div>
  );
}
