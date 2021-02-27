import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'

const Winner = () => {
    const context = useContext(GameContext);
    const { winner } = context

    return (
        <div>
            <br />
            {winner ? <h3 style={{ textAlign: 'center' }}>O jogador {winner} ganhou!!! Parabéns!!</h3> : null}
            <br />
        </div>
    )
}

export default Winner
