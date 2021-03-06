import React, { useState } from 'react';
import { styles } from '../../styles/components';
import Counter from './Counter';
import CountersSummary from './CountersSummary';
import { ICounter } from './types';

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
    <section style={styles.Pannel}>
      <div style={styles.CountersHeader}>Counters challenge</div>
      <div style={styles.Counters}>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counterId={counter.id}
            value={counter.value}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div style={styles.CountersSummary}>
        <CountersSummary counters={counters} />
      </div>
    </section>
  );
}

export default CountersPannel;
