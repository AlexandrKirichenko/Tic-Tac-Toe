import React, {useState, useEffect} from 'react'
import Board from '../Board/Board'
import {calculateWinner,isBoardFull} from '../../helper'
import Winner from '../Winner/Winner'
import './Game.scss'
import Move from '../Move/Move'


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [X, setX] = useState(true);
    const [isDraw, setIsDraw] = useState (false);
    const [winner, setWinner] = useState(null);
    
    useEffect(() => {
        const winner =  calculateWinner(board);
        if (winner) {
            setWinner(winner);
            return;
        }
        
        if (isBoardFull(board)) {
            setIsDraw(true);
        }
        
    }, [board]);
    
    const handleClick = (index) => {
 
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        
        boardCopy[index] = X ? 'X' : 'O'
        setBoard(boardCopy)
        setX(!X)
    }
    
    const btnClk = () => {
        setBoard(Array(9).fill(null));
        setX(true);
        setWinner(null);
        setIsDraw(false);
    }
    const disableColor = Boolean(winner || isDraw)
    return (
        <div className="wrapper">
            <Move player={X} disableColor={disableColor}/>
            <Board squares={board} click={handleClick} disableColor={disableColor}/>
            {winner || isDraw ? <Winner winner={winner}  isDraw={isDraw} btnClk={btnClk}/> : null}
        </div>
    
    )
}

export default Game