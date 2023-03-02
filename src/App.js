import './styles/app.css';
import { useEffect, useState } from 'react';

function App() {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const [correctHex, setCorrectHex] = useState('');
  const [hexArray, setHexArray] = useState([]);

  const getRandomHex = () => {
    const hex = [];
    for (let i = 0; i < 6; i++) {
      hex.push(hexArr[Math.floor(Math.random() * (15 - 0 + 1)) + 0]);
    }
    const hexString = hex.toString().replaceAll(',', '');
    return `#${hexString}`;
  };

  useEffect(() => {
    const answer = getRandomHex();
    setCorrectHex(answer);
    setHexArray([answer, getRandomHex(), getRandomHex()].sort(() => 0.5 - Math.random()));
  }, []);

  const handleClick = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === correctHex) {
      console.log('CORRECT');
    } else {
      console.log('INCORRECT');
      e.target.style.backgroundColor = 'red';
    }
  }

  return (
    <div className="App">
      <div className="box" style={{background: `${correctHex}`}}></div>
      <div className='btn-container'>
      {hexArray && hexArray.map(hex => {
        return <button onClick={handleClick} key={hex}>{hex}</button>
      })}
      </div>
    </div>
  );
}

export default App;
