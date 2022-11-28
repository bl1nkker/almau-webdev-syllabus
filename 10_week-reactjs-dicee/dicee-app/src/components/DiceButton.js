function DiceButton({ onClick, imageNumber}){
    return (
        <button onClick={onClick}>
          <img src={require(`./../assets/dice${imageNumber}.png`)} alt='dice'/>
          <p>This is dice number {imageNumber}</p>
        </button>
    )
}

export default DiceButton;