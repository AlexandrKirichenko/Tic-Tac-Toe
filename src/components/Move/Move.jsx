import React from 'react'
import './Move.scss'

const Move = ({player, disableColor}) => {
    return (
        <div className={`wraper ${disableColor ? 'color-gray opacity-20' : '' }` }>
            <div className="move_dsc color-modificator ">  X</div>
            <div className="btn__line"></div>
            <div className="move_dsc color-modificator ">  O </div>
            <div className={`btn__line_round ${ player ?  'left': 'right' } `} ></div>
        </div>
    )
}

export default Move