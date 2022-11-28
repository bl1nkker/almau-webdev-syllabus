import { useParams } from 'react-router-dom';
import char_json from '../data/data';
function Character() {
    const params = useParams();
    // params = {char_id: "1"}
    let char_id = params['char_id']
    let selected_char = null;

    for (let index = 0; index < char_json['results'].length; index++){
        if (char_json['results'][index]['id'] == char_id){
            selected_char = char_json['results'][index]
            break
        }
    }
    console.log(selected_char)
    return ( <div>
        <h1>Character id: {selected_char['id']}</h1>
        <h1>Character name: {selected_char['name']}</h1>
        <p>Character status: {selected_char['status']}</p>
        <p>Character species: {selected_char['species']}</p>
        <p>Character type {selected_char['type']}</p>
        <p>Character gender {selected_char['gender']}</p>
        <img src={selected_char['image']} alt=''/>

    </div> );
}

export default Character;