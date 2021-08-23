import React, {useState, useMemo} from 'react'
import Board from '../Board/Board'
import {calculateWinner} from '../../helper'
import Winner from '../Winner/Winner'
import './Game.scss'


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = useMemo (()=>calculateWinner(board), [board] );
    
    const handleClick = (index) => {
        if(board[index]) {
            alert('Ячейка занята')
        }
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        let flag = false
        for (let i = 0; i<9; i++) {
            flag   =  !Boolean(boardCopy[i]);
        }
        if (!flag) {
            alert('Nichya')
        }
        
        boardCopy[index] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }
    
    // const startNewGame = () => {
    //     return (
    //         <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}> Play again</button>
    //     )
    // }
    return (
        <div className="wrapper">
            <Board squares={board} click={handleClick}/>
                {winner ? <Winner winner={winner} /> : null}
        </div>
    
    )
}

export default Game