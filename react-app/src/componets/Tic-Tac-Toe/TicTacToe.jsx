import React, { useEffect, useState } from 'react'
import "../Tic-Tac-Toe/TicToc.css"
import useTikToc from './CustomHook'
const initialSize = 9
const TicTacToe = () => {
    const [board, setBoard] = useState(new Array(initialSize).fill(null))
    const [score, setScore] = useState({ X: 0, O: 0, draw: 0 })
    const { clickHandler, isWinner, resetHandler } = useTikToc(board, setBoard, initialSize, score, setScore)
    return (
        <div className="container">
           
            <div className='boards'>
            <div className="scoreboard">
                <p>Player X: {score.X}</p>
                <p>Player O: {score.O}</p>
                <p>Draws: {score.draw}</p>
            </div>
                {isWinner && <div className='msg'> {`${isWinner} wins the Game`}</div>}
                <div className='board'>
                    {board && board.map((cell, index) => {
                        return <div className='cell' key={index} onClick={() => clickHandler(index)}>{cell}</div>
                    })}
                </div>
                <div className='buttons'>
                    {!isWinner && <button className='reset_btn' onClick={resetHandler}>Reset</button>}
                    {isWinner && <button className='new_btn' onClick={resetHandler}>New Game</button>}
                </div>
            </div>

        </div>

    )
}

export default TicTacToe