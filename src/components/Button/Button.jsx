import React from 'react'
import './Button.scss'

const Button = ({btnClk}) => {
   
    return (
        <div>
            <button className="play__again_btn" onClick={btnClk}> Play again</button>
        </div>
    )
}

export default Button