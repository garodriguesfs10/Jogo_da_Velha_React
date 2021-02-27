import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'

const Reset = () => {
    const context = useContext(GameContext);
    const { setSquares, setisXtime, setDone, setWinner } = context

    const handleClick = () => {
        if (!window.confirm('Tem certeza que deseja resetar?')) return;
        setSquares(Array(9).fill(null));
        setisXtime(true)
        setDone(false);
        setWinner(null)
    }

    return (
        <div className="reset">
            <button type="button" onClick={handleClick} className="btnreset">
                Resetar Jogo
            </button>
        </div>
    )
}

export default Reset
