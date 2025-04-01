//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import { NumericTitle } from './numericTitle';

function App() {
  //const [count, setCount] = useState(0);
  const numbers = [...Array(7).keys()].map((n) => n + 1);

  return (
    <>
      {numbers.map((n) => (
        <NumericTitle n={n}>Title {n}</NumericTitle>
      ))}
    </>
  );
}

export default App;
