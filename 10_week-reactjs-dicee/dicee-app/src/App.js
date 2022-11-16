import './App.css';
import { useState } from 'react';

function App() {
  const [leftDiceNumber, setLeftDiceNumber] = useState(2);
  const [rightDiceNumber, setRightDiceNumber] = useState(3);

  const onButtonClicked = () =>{
    console.log("Button clicked");
    setLeftDiceNumber(6);
    setRightDiceNumber(5);
    console.log(leftDiceNumber, rightDiceNumber);
  }

  const onDefaultButtonClicked1 = () => {
    console.log('Default button clicked 1');
  }
  const onDefaultButtonClicked2 = () => {
    console.log('Default button clicked 2');
    console.log('Default button clicked 2');
  }
  const onDefaultButtonClicked3 = () => {
    console.log('Default button clicked 3');
    console.log('Default button clicked 3');
    console.log('Default button clicked 3');
  }
  return (
    <div className="App">
      <header>Dicee</header>
      <main>
        <button onClick={onButtonClicked}><img src={require(`./assets/dice${leftDiceNumber}.png`)}/></button>
        <button onClick={onButtonClicked}><img src={require(`./assets/dice${rightDiceNumber}.png`)}/></button>
      </main>
      <DefaultButton func={onDefaultButtonClicked1} text='123'/>
      <DefaultButton func={onDefaultButtonClicked2} text='Hello World'/>
      <DefaultButton func={onDefaultButtonClicked3} text='Qwer'/>
    </div>
  );
}

export default App;

function DefaultButton({
  text,
  func
}) {
  return <button onClick={func} class=''>Press Me {text}</button>
}