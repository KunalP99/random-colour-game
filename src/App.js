import './styles/app.css';
import { useEffect, useState } from 'react';

function App() {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const [correctHex, setCorrectHex] = useState('');

  const getRandomHex = () => {
    const hex = [];
    for (let i = 0; i < 6; i++) {
      hex.push(hexArr[Math.floor(Math.random() * (15 - 0 + 1)) + 0]);
    }
    const hexString = hex.toString().replaceAll(',', '');
    return `#${hexString}`;
  }

  useEffect(() => {
    setCorrectHex(getRandomHex);
  }, []);

  return (
    <div className="App">
      <div className="box" onClick={getRandomHex} style={{background: `${correctHex}`}}></div>
      <button>{correctHex}</button>
    </div>
  );
}

export default App;
