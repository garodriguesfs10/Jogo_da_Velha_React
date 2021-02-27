import React, { useContext, useEffect } from 'react'
import { GameContext } from '../contexts/GameContext'
import Reset from './Reset';
import Square from './Square';
import Player from './Player';
import Winner from './Winner';
import calcWinner from '../utils/calculateWinner'
const Board = () => {
    const context = useContext(GameContext);
    const { squares, done, setDone, setWinner } = context

    useEffect(() => {
        const res = calcWinner(squares)
        if (res) {
            setDone(true)
            setWinner(res)
        }
    }, [setWinner, squares, setDone])

    return (
        <div className="board-container">
            <Player />
            <Winner />
            <Reset />
            <div className="board">
                {squares.map((value, index) => {
                    return <Square value={value} index={index} done={done} key={index} />
                })}
            </div>

        </div>
    )
}

export default Board
