import React from 'react';
import { Add, Subtract } from '../../functionalities';

interface IProps {
    counterId: number;
    value: number;
    // eslint-disable-next-line no-unused-vars
    handleChange: (counterId: number, newValue: number) => void;
  }

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

export default Counter;
