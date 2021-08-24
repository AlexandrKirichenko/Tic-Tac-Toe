import React from 'react'
import './Board.scss'
import Square from '../Square/Square'

const Board = ({squares, click, disableColor}) => {
    return (
        <div className="board">
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => click(i)} disable = { Boolean( squares[i] ) } />
                        ))
            }
        </div>
    );
}

export default Board