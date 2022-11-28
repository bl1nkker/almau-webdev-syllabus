import char_json from './../data/data.js';
import { Link } from 'react-router-dom';
import './../styles/style.css';

function CharactersList() {
  
  return (
    <div className="character_list">
      {/* <h1>Characters count {char_json['info']['count']}</h1> */}
      {char_json['results'].map((char) => {
        return (
          <div className='character'>
            <div className='image'>
              <img src={char['image']} alt=''/>
            </div>
            <div className='text'>
              <h2>Character id: {char['id']}</h2>
              <h2>Character name: {char['name']}</h2>
              <p>Character status: {char['status']}</p>
              <p>Character species: {char['species']}</p>
            </div>

            {/* <a href='/info'>Show More</a> */}

            <Link to={`/character/${char.id}`}> Show Details</Link>
          </div>
        )
      })}
    </div>
  );
}

export default CharactersList;
