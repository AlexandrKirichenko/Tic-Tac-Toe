import React from 'react';
import './Square.scss';

const Square = ({onClick, value, disable, disableColor}) => {
    console.log(disableColor);
    return (
        <button className={`square ${disableColor ? 'color-gray' : 'color-black' }` } onClick={onClick} disable={disable} >
            {value}
        </button>
    )
}

export default Square;