import { useState } from "react";

const useTikToc = (board, setBoard, initialSize, score, setScore) => {

    const [isX, setIsX] = useState(true)
    const [isWinner, setIsWinner] = useState(null)
    const clickHandler = (index) => {
        if (board[index] != null) {
            return
        }
        if (isWinner) {
            return
        }
        let newBoard = [...board]
        if (isX) {
            newBoard[index] = 'X'
            setBoard(newBoard)
            // setBoard([...board, board[index] = 'X']) //! this will not work
            setIsX(false)
        } else {
            newBoard[index] = 'O'
            setBoard(newBoard)
            // setBoard([...board, board[index] = 'O']) //! this will not work
            setIsX(true)
        }

        const winner = checkWinner(newBoard)
        if (winner) {
            setIsWinner(winner)
        }

    }

    const checkWinner = (board) => {
        for (let pattern of winningPattern) {
            const [a, b, c] = pattern
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setScore({ ...score, [board[a]]: score[board[a]]+1 });
                console.log("score", score);
                return board[a];
            }
        }
        if(board.every((cell) => cell != null)){
            setScore({...score, "draw": score['draw'] + 1})
            return setIsWinner('Draw')
        }
        return null
    }

    const resetHandler = () => {
        setBoard(new Array(initialSize).fill(null))
        setIsX(true)
        setIsWinner(null)
    }

    const winningPattern = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [3, 4, 5],
        [6, 7, 8],
        [6, 4, 2],
        [1, 4, 7],
        [2, 5, 8]
    ]

    return { clickHandler, isWinner, resetHandler, }
}

export default useTikToc