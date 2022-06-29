import { Colors } from './colors';

// Styles for specific components in the app like buttons and panels.
const App = {
  fontFamily: 'arial',
  display: 'inline-block',
};

const Button = {
  color: Colors.white,
  padding: '3px',
  margin: '5px',
  width: '40px',
  borderRadius: '50%',
  border: 'none',
  textDecoration: 'none',
  fontSize: '28px',
  cursor: 'pointer',
};

const IncrementButton = {
  backgroundColor: Colors.green,
  ...Button,
};
const DecrementButton = {
  backgroundColor: Colors.red,
  ...Button,
};

const Pannel = {
  border: '2px solid grey',
  borderColor: Colors.secondary,
  borderRadius: '25px',
  padding: '10px',
  // Making use of `const` as notation to avoid ts type error https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
  textAlign: 'center' as const,
};

const Counters = {
  display: 'inline-flex',
};

const Counter = {
  margin: '50px',
};

const CountersHeader = {
  color: Colors.white,
  backgroundColor: Colors.primary,
  fontSize: '36px',
};

const CountersSummary = {
  color: Colors.white,
  backgroundColor: Colors.secondary,
  fontSize: '22px',
};

export const styles = {
  App,
  IncrementButton,
  DecrementButton,
  Pannel,
  Counters,
  Counter,
  CountersHeader,
  CountersSummary,
};
