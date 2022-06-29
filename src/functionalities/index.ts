export function Increment(initialValue: number): number { return initialValue + 1; }

export function Decrement(initialValue: number): number { return initialValue - 1; }

export function Add(initialValues: number[], { initialValue = 0 }): number {
  return initialValues.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue,
  );
}
