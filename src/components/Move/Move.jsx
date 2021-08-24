import React from 'react'
import './Move.scss'

const Move = ({player}) => {
    return (
        <div className="wraper">
            <div className="move_dsc color-modificator ">  X</div>
            <div className="btn__line"></div>
            <div className="move_dsc color-modificator ">  O </div>
             <div className="btn__line_round" style={{left: player ? '99px': '30px' }}></div>
          
        </div>
    )
}

export default Move