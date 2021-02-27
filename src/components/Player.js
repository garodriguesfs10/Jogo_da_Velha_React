import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import '../pages/Home.css'

const Board = () => {
    const context = useContext(GameContext);
    const { isXtime } = context

    return (
        <div className="player">
            <h3 style={{ textAlign: 'center' }}>Vez do player '{isXtime ? 'X' : 'O'}'</h3>
        </div>

    )
}

export default Board
