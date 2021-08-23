import React, {useState, useEffect} from 'react'
import Board from '../Board/Board'
import {calculateWinner,isBoardFull} from '../../helper'
import Winner from '../Winner/Winner'
import './Game.scss'


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [player, setPlayer] = useState(true);
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
        if(board[index]) {
            alert('Ячейка занята')
        }
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return

        boardCopy[index] = player ? 'X' : 'O'
        setBoard(boardCopy)
        setPlayer(!player)
    }
    
    const btnClk = () => {
        setBoard(Array(9).fill(null));
        setPlayer(true);
        setWinner(null);
        setIsDraw(false);
    }
    
    return (
        <div className="wrapper">
            <Board squares={board} click={handleClick}/>
                {winner || isDraw ? <Winner winner={winner}  isDraw={isDraw} btnClk={btnClk}/> : null}
        </div>
    
    )
}

export default Game