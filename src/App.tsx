import React, { useState } from 'react';
import { Add, Subtract } from './functionalities';

interface ICounter {
  id: number;
  value: number;
}

interface IProps {
  counterId: number;
  value: number;
  // eslint-disable-next-line no-unused-vars
  handleChange: (counterId: number, newValue: number) => void;
}

const data: ICounter[] = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

function Counter({ counterId, value, handleChange }: IProps) {
  return (
    <div>
      <b data-testid={`counter-${counterId}`}>{value}</b>
      <div>
        <button data-testid={`subtraction-btn-${counterId}`} type="button" onClick={() => handleChange(counterId, Subtract(value))}>-</button>
        <button data-testid={`addition-btn-${counterId}`} type="button" onClick={() => handleChange(counterId, Add(value))}>+</button>
      </div>
    </div>
  );
}

function App() {
  const [counters, setCounters] = useState(data);

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

export default App;
