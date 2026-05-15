import { useEffect, useState } from 'react';

const BASE = 1_247_893;

function fmt(n: number) {
  return n.toLocaleString('en-US');
}

export default function InfectionCounter() {
  const [count, setCount] = useState(BASE);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 7 + 1));
    }, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="infection-counter mt-12">
      <div className="infection-counter-inner">
        <div className="infection-dot" />
        <div>
          <div className="infection-label">CONFIRMED INFECTIONS</div>
          <div className="infection-number">{fmt(count)}</div>
          <div className="infection-sublabel">wallets infected worldwide — and spreading</div>
        </div>
        <div className="infection-dot" />
      </div>
    </div>
  );
}
