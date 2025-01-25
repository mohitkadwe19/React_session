import React, { useState } from 'react'
import './App.css'

const TicTacToe = () => {

 const [board, setBoard] = useState(Array(9).fill(null));
 // value of board [null, null, null, null, null, null, null, null, null]

  const [isXNext, setIsXNext] = useState(true);

  const [winner, setWinner] = useState(null);


 function handleClick(index){

    if( calculateWinner(board)){
        setWinner("The game is already over. you are a winner");
        return;
    }
    if(board[index]){
        return;
    }


    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
 }

 const calculateWinner = (squares) => {
  
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let line of lines){
        const [a,b,c] = line;

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }


    return null;

 }

  



  return (
    <>

    <h1>Tic Tac Toe</h1>

    <p>{winner}</p>

    <div className="board">

        {
            board.map((cell, index)=>(
                <div key={index} className="cell" onClick={()=>handleClick(index)}>
                    {cell}
                </div>
            ))
        }

    </div>

    </>
  )
}

export default TicTacToe