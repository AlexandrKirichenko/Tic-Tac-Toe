import React from 'react';
import './Square.css';

const Square = ({handleBtnClick}) => {
    return (
        <button className="square" onClick={handleBtnClick}>
            X
        </button>
    )
}

export default Square;