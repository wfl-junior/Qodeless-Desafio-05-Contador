import { useState } from "react";

interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count => count + 1);
  }

  function decrement() {
    setCount(count => count - 1);
  }

  return (
    <div className="wrapper">
      <button title="Decrementar" onClick={decrement}>
        -
      </button>

      <span>{count}</span>

      <button title="Incrementar" onClick={increment}>
        +
      </button>
    </div>
  );
};
