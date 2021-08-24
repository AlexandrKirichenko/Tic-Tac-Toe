import React from 'react';
import './Square.scss';

const Square = ({onClick, value, disable, disableColor}) => {
    return (
        <button className={`square ${disableColor ? '.color-black' : '.color-gray ' }` } onClick={onClick} disable={disable} disableColor={disableColor}>
            {value}
        </button>
    )
}

export default Square;