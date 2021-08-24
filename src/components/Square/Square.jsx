import React from 'react';
import './Square.scss';

const Square = ({onClick, value, disableColor}) => {
    return (
        <button className={`square ${disableColor ? 'color-gray background-color' : ' ' }` } onClick={onClick} disable={!value} >
            {value}
        </button>
    )
}

export default Square;