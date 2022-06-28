import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

test('Counter should show 3 initial 0s', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText('0');
  expect(linkElement.length).toEqual(3);
});

test('Counter 1 should show an increment of 1 when pressing +', async () => {
  render(<App />);

  const counter = screen.getByTestId('counter-1');
  const incrementBtn = screen.getByTestId('addition-btn-1');

  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent('1');
});

test('Counter 2 should show an decrement of 1 when pressing -', async () => {
  render(<App />);

  const counter = screen.getByTestId('counter-2');
  const decrementBtn = screen.getByTestId('subtraction-btn-2');

  fireEvent.click(decrementBtn);

  expect(counter).toHaveTextContent('-1');
});

test('Counter 3 should show initial value when pressing - and +', async () => {
  render(<App />);

  const counter = screen.getByTestId('counter-3');
  const decrementBtn = screen.getByTestId('subtraction-btn-3');
  const incrementBtn = screen.getByTestId('addition-btn-3');

  fireEvent.click(decrementBtn);
  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent('0');
});
