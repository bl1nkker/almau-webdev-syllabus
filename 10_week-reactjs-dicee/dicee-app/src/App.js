import './App.css'
import { useState } from 'react'
import DiceButton from './components/DiceButton'

function App() {
  const [leftDiceNumber, setLeftDiceNumber] = useState(1)
  const [rightDiceNumber, setRightDiceNumber] = useState(6)
  const [thirdDiceNumber, setThirdDiceNumber] = useState(6)
  // let leftDiceNumber = 1;
  // let rightDiceNumber = 6;

  function onDiceClicked(){
    setLeftDiceNumber(Math.floor(Math.random() * 6) + 1)
    setRightDiceNumber(Math.floor(Math.random() * 6) + 1)
    setThirdDiceNumber(Math.floor(Math.random() * 6) + 1)
    // leftDiceNumber = 5
    // rightDiceNumber = 3
    // console.log(leftDiceNumber, rightDiceNumber)
  }
  return (
    <div className="App">
      <header>
        <h1>Dicee App</h1>
      </header>
      <main>
        <DiceButton imageNumber={leftDiceNumber} onClick={onDiceClicked}/>
        <DiceButton imageNumber={rightDiceNumber} onClick={onDiceClicked}/>
        <DiceButton imageNumber={thirdDiceNumber} onClick={onDiceClicked}/>
        {/* <button onClick={onDiceClicked}>
          <img src={require(`./assets/dice${leftDiceNumber}.png`)} alt='dice'/>
          
        </button>
        <button onClick={onDiceClicked}>
          <img src={require(`./assets/dice${rightDiceNumber}.png`)} alt='dice'/>

        </button> */}
      </main>
    </div>
  );
}

export default App;
