import React from 'react'
import Board from '../components/Board'
import GameContextProvider from '../contexts/GameContext'
import './Home.css'
const Home = () => {


    return (
        <div className="wrapper">
            <GameContextProvider>
                <Board />
            </GameContextProvider>
        </div>
    )
}

export default Home
