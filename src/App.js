import './styles/app.css';
import { useEffect, useState } from 'react';

function App() {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const [correctHex, setCorrectHex] = useState('');
  const [hexArray, setHexArray] = useState([]);
  const [points, setPoints] = useState(0);

  // Get random 6 digits and letters to form a hex colour code
  const getRandomHex = () => {
    const hex = [];
    for (let i = 0; i < 6; i++) {
      hex.push(hexArr[Math.floor(Math.random() * (15 - 0 + 1)) + 0]);
    }
    const hexString = hex.toString().replaceAll(',', '');
    return `#${hexString}`;
  };

  // Run game by getting the random hex colour codes and setting one as the correct answer
  const runGame = () => {
    const answer = getRandomHex();
    setCorrectHex(answer);
    setHexArray([answer, getRandomHex(), getRandomHex()].sort(() => 0.5 - Math.random()));
  }

  // Run game on start
  useEffect(() => {
    runGame();
  }, []);

  // Checks if the correct button is clicked which if so, run the game again
  const handleClick = (e) => {
    if (e.target.innerText === correctHex) {
      console.log('CORRECT');
      setPoints(points + 1);
      runGame();
    } else {
      console.log('INCORRECT');
      e.target.style.backgroundColor = 'red';
    }
  }

  return (
    <div className="App">
    <h1>GUESS THE HEX</h1> 
      <div className="box" style={{background: `${correctHex}`}}></div>
      <div className='middle-container'>
        <p className='points'>{points}</p>  
        <div className='btn-container'>
          {hexArray && hexArray.map(hex => {
          return <button onClick={handleClick} key={hex}>{hex}</button>
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
