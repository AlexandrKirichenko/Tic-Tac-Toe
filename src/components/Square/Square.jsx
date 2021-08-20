import React from 'react';
import './Square.scss';

const Square = ({handleBtnClick, value}) => {
    return (
        <button className="square" onClick={handleBtnClick}>
            {value}
        </button>
    )
}

export default Square;