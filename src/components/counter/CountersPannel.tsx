import React, { useState } from 'react';
import Counter from './Counter';

interface ICounter {
  id: number;
  value: number;
}

const initialCounterData: ICounter[] = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

function CountersPannel() {
  const [counters, setCounters] = useState(initialCounterData);

  const handleChange = (counterId: number, newValue: number): void => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return { ...counter, value: newValue };
      }
      return counter;
    });

    setCounters(newCounters);
  };

  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counterId={counter.id}
          value={counter.value}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default CountersPannel;
