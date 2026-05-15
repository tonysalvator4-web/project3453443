import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET = new Date('2026-06-06T06:06:06Z');

function calc(): TimeLeft {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function CountdownTimer() {
  const [time, setTime] = useState<TimeLeft>(calc());
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(calc());
      setTick((t) => !t);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="countdown-container">
      <div className="countdown-label">☣ INFECTION INITIATES IN ☣</div>
      <div className="countdown-grid">
        {[
          { label: 'DAYS', value: time.days },
          { label: 'HRS', value: time.hours },
          { label: 'MIN', value: time.minutes },
          { label: 'SEC', value: time.seconds },
        ].map((unit, i) => (
          <div key={unit.label} className="flex items-center">
            <div className="countdown-unit">
              <div className={`countdown-digit ${unit.label === 'SEC' ? 'animate-pulse-red' : ''}`}>
                {pad(unit.value)}
              </div>
              <div className="countdown-unit-label">{unit.label}</div>
            </div>
            {i < 3 && (
              <div className={`countdown-sep ${tick ? 'opacity-100' : 'opacity-20'} transition-opacity duration-500`}>:</div>
            )}
          </div>
        ))}
      </div>
      <div className="countdown-sublabel">06.06.2026 — THE ORDER ACTIVATES</div>
    </div>
  );
}
