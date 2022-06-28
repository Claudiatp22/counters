import { Add, Subtract } from './functionalities';

test('Counter should increment value by 1', () => {
  const initialValue = 0;
  const expectedResult = 1;

  const result = Add(initialValue);
  expect(result).toEqual(expectedResult);
});

test('Counter should decrement value by 1', () => {
  const initialValue = 0;
  const expectedResult = -1;

  const result = Subtract(initialValue);
  expect(result).toEqual(expectedResult);
});
