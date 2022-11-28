import './App.css';
import { Routes, Route } from 'react-router-dom';
import CharactersList from './components/CharactersList.js';
import Character from './components/Character.js';
import Info from './components/Info';

function App() {
  return (
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/info" element={<Info />} />
        <Route path="/character/:char_id" element={<Character />} />
      </Routes>
  );
}

export default App;
