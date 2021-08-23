import React from 'react';
import './Square.scss';

const Square = ({onClick, value}) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;