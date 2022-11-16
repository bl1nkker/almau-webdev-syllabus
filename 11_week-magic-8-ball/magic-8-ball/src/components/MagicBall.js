import { useState } from 'react'

function MagicBall() {
    const [value, setValue] = useState(3);

    const handleClick = () => {
        // Generate a random number between 1 and 5
        const randomValue = Math.floor(Math.random() * 5) + 1;
        setValue(randomValue);
    }
    return ( 
       <button onClick={handleClick}>
        <img src={require(`./../assets/ball${value}.png`)} alt=''/>
       </button> 
     );
}

export default MagicBall;