import React from 'react';
import { Add } from '../../functionalities';
import { ICounter } from './types';

interface IProps {
    counters: ICounter[];
}

function CountersSummary({ counters }: IProps) {
  return (
    <>
      <span>Total count: </span>
      {Add(counters.map((counter: ICounter) => counter.value))}
    </>
  );
}

export default CountersSummary;
