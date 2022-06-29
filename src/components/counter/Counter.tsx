import React from 'react';
import { Increment, Decrement } from '../../functionalities';
import { styles } from '../../styles/components';

interface IProps {
    counterId: number;
    value: number;
    // TODO: (Claudia) Investigate this TS error. For some strange reason TS
    // is complaining that these variables are not being used. However, they are part
    // of an interface so I am not sure why it is complaing in the first place.
    // eslint-disable-next-line no-unused-vars
    handleChange: (counterId: number, newValue: number) => void;
}

function Counter({ counterId, value, handleChange }: IProps) {
  return (
    <div style={styles.Counter}>
      <b data-testid={`counter-${counterId}`}>{value}</b>
      <div>
        <button data-testid={`increment-btn-${counterId}`} type="button" style={styles.IncrementButton} onClick={() => handleChange(counterId, Increment(value))}>+</button>
        <button data-testid={`decrement-btn-${counterId}`} type="button" style={styles.DecrementButton} onClick={() => handleChange(counterId, Decrement(value))}>-</button>
      </div>
    </div>
  );
}

export default Counter;
