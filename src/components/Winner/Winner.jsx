import React from 'react'
import './Winner.scss'
import Button from '../Button/Button'

const Winner = ({winner,isDraw, btnClk}) => {
    return (
        <div className="wrap">
            <div className="wrap-internal">
                {winner? <div className="winner">Player {winner} Win </div>: null}
                {isDraw? <div className="winner">Draw </div>: null}
                <Button btnClk={btnClk}/>
            </div>
        </div>
    )
}

export default Winner