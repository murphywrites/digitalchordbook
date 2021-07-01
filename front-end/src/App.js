import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [chordInput, setChordInput] = useState("");

  const handleChange = (evt) => {
    const {value} = evt.target
    setChordInput(value)
    console.log(chordInput)                
}

  return (
    <div className="App">
        <label for="chord-input">Paste Chords Text in Here: </label>
      <textarea className="chord-input-box" name="chord-input" value={chordInput} onChange={handleChange} type="textarea">
      </textarea>
    </div>
  );
}

export default App;
