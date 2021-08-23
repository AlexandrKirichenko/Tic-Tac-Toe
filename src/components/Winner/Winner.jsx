import React from 'react'
import './Winner.scss'

const Winner = ({winner}) => {
    return (
        <div className="wrap">
           <div className="winner">Player {winner} Win
           </div>
        </div>
    )
}

export default Winner