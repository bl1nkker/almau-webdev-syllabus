import { useState } from 'react'
import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';

import './App.css';

function App() {
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [currentDice1, setCurrentDice1] = useState(dice1);
  const [currentDice2, setCurrentDice2] = useState(dice1);
  const changeDice = () => {
    const randomDice1 = diceArray[Math.floor(Math.random() * diceArray.length)];
    const randomDice2 = diceArray[Math.floor(Math.random() * diceArray.length)];
    setCurrentDice1(randomDice1);
    setCurrentDice2(randomDice2);
  }
  return (
    <div className="App">
      <header>Dicee</header>
      <main>
        <button onClick={changeDice}>
            <img src={currentDice1} className="App-logo" alt="logo" />
        </button>
        <button onClick={changeDice}>
            <img src={currentDice2} className="App-logo" alt="logo" />
        </button>
      </main>
    </div>
  );
}

export default App;
