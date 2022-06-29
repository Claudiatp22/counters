import React from 'react';
import CountersPannel from './components/counter/CountersPannel';
import { styles } from './styles/components';

function App() {
  return (
    <div style={styles.App}>
      <CountersPannel
        key="counter-pannel"
      />
    </div>
  );
}

export default App;
