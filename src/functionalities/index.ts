export function Increment(initialValue: number): number { return initialValue + 1; }

export function Decrement(initialValue: number): number { return initialValue - 1; }

export function Add(initialValues: number[]): number {
  return initialValues.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
  );
}
