import React, { createContext, useState } from 'react'

export const GameContext = createContext();



export default function GameContextProvider({ children }) {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXtime, setisXtime] = useState(true)
    const [done, setDone] = useState(false)
    const [winner, setWinner] = useState(null)

    const state = {
        squares, setSquares, isXtime, setisXtime, setDone, done, winner, setWinner
    }

    return <GameContext.Provider value={state}>
        {children}
    </GameContext.Provider>
}