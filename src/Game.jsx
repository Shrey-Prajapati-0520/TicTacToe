import { useState , useEffect } from 'react'
import './App.css'

function Square({ value, onSquareClick }) {
  return (
        <button className="btn" onClick={onSquareClick}>
          {value}
        </button>
  );
}


function Game() {

  
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [showpopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const winner = calculateWinner(squares);
  useEffect(() => {
    if(winner){
      setShowPopup(true);
      setPopupMessage('Winner is ' + winner);
      setTimeout(() => {
        setShowPopup(false);
        setSquares(Array(9).fill(null));
        setXIsNext(true);
      }, 1000);
    }
   }, [winner]);
   const draw = squares.every(square => square !== null) && !winner;
   useEffect(() => {
    if (draw) {
      setShowPopup(true);
      setPopupMessage('It\'s a draw!');
      setTimeout(() => {
        setShowPopup(false);
        setSquares(Array(9).fill(null));
        setXIsNext(true);
      }, 1000)};
   }, [draw]);
  
  if (!isGameStarted) {
    return (
      <div className="player-input">
        <div className="Ainner-box">
        <h2>Enter Player Names</h2>
        <input
          type="text"
          placeholder="Player 1 (X)"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Player 2 (O)"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <button className="start" onClick={() => setIsGameStarted(true)} disabled={!player1 || !player2}>
          Start Game
        </button>
      </div>
      </div>
    );
  }
   
  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }
  
   let status
   if(winner){
      status = 'Winner: ' + winner;
   } else {
      status = xIsNext ? `${player1}'s turn` : `${player2}'s turn`;
   }
   
   function handleClick(i) {

      if(squares[i] || winner){
        return;
      }
      const nextSquares = squares.slice();
      if(xIsNext){
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
  }
  return(
    <>
    <div className="box">
      <div className="Row">
        <Square  value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square  value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square  value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="Row">
        <Square  value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square  value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square  value={squares[5]} onSquareClick={() => handleClick(5)}/>      
      </div>
      <div className="Row">
        <Square  value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square  value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square  value={squares[8]} onSquareClick={() => handleClick(8)}/>      
      </div>
      </div>
       <div className="status">{status}</div>
      <div className="reset-container">
      <button className="reset" onClick={resetGame}>Reset Game</button>
      </div>
      {showpopup && (
        <div className="popup">
            <div className="popup-content">     
                <p>{popupMessage}</p>
            </div>
        </div>
         )}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],      
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;

  
}
export default Game
