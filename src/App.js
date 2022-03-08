import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[counter, setCounter] = useState(0)
console.log('holi')
  return (
    <div>
      <h1>Contador {counter}</h1>
      <button onClick={() => setCounter(counter+1)}>Sumar</button>
      <button onClick={() => setCounter(counter - counter)}>Reset</button>
      <button onClick={() => setCounter(counter-1)}>Restar</button>
    </div>
  );
}

export default App;
