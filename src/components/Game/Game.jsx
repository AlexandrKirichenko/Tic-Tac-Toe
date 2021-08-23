import React, {useState} from 'react'
import Board from '../Board/Board'
import {calculateWinner} from '../../helper'

import './Game.scss'


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)
    
    const handleClick = (index) => {
        const boardCopy = [...board]
        // Определяю был ли клик по ячейке или игра закончилась
        if (winner || boardCopy[index]) return   //т.к. по умолчанию массив пустой
        // Определить чей ход
        boardCopy[index] = xIsNext ? 'X' : 'O'
        //Обновление стейта
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }
    
    const startNewGame = () => {
        return (
            <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}> Очистить поле</button>
        )
    }
    return (
        <div className="wrapper">
            <Board squares={board} click={handleClick}/>
            <p className="game__info">
                {winner ? 'Player ' + winner + ' Win' : 'Step for ' + ( xIsNext ? 'X' : 'O')}
            </p>
            {startNewGame()}
        </div>
    
    )
}

export default Game