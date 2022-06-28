import Add from './functionalities';

test('Counter should increment value by 1', () => {
  const initialValue = 0;
  const expectedResult = 1;

  const result = Add(initialValue);
  expect(result).toEqual(expectedResult);
});
