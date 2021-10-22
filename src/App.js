
import { useState } from 'react';
import './App.css';
import QRCodeCanvas  from './QRCodeCanvas.js';

function App() {
  const [text, setText] = useState("Insira uma URL válida")
  return (
    <div className="App">
     <input onChange={(element)=>{setText(element.target.value)}} value={text} />
     <QRCodeCanvas text={text} ></QRCodeCanvas>
    </div>
  );
}

export default App;
