import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'


const Square = ({ value, index, done }) => {
    const context = useContext(GameContext);
    const { squares, setSquares, isXtime, setisXtime } = context


    const handleClick = () => {
        if (squares[index] != null) return;
        const newSquares = [...squares];
        newSquares[index] = isXtime ? 'X' : 'O'
        setSquares(newSquares)
        setisXtime(!isXtime)
    }

    return (
        <button type="button" onClick={handleClick} disabled={done}>
            {value}
        </button>
    )
}

export default Square
