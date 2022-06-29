import { Increment, Decrement, Add } from '../functionalities';

describe('Counters should', () => {
  test('decrement value by 1', () => {
    const initialValue = 0;
    const expectedResult = -1;

    const result = Decrement(initialValue);
    expect(result).toEqual(expectedResult);
  });

  test('increment value by 1', () => {
    const initialValue = 0;
    const expectedResult = 1;

    const result = Increment(initialValue);
    expect(result).toEqual(expectedResult);
  });

  test('add all counter values', () => {
    const initialValues = [1, 2, -1];
    const expectedResult = 2;

    const result = Add(initialValues);
    expect(result).toEqual(expectedResult);
  });
});
