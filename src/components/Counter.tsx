import { useState } from "react";

interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(0);

  function increment(amount: number) {
    setCount(count => count + amount);
  }

  function decrement(amount: number) {
    setCount(count => count - amount);
  }

  return (
    <div className="wrapper">
      <button title="Decrementar 100" onClick={() => decrement(100)}>
        -100
      </button>

      <button title="Decrementar 10" onClick={() => decrement(10)}>
        -10
      </button>

      <button title="Decrementar 1" onClick={() => decrement(1)}>
        -1
      </button>

      <span>{count}</span>

      <button title="Incrementar 1" onClick={() => increment(1)}>
        +1
      </button>

      <button title="Incrementar 10" onClick={() => increment(10)}>
        +10
      </button>

      <button title="Incrementar 100" onClick={() => increment(100)}>
        +100
      </button>
    </div>
  );
};
