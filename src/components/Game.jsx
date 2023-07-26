import React from 'react';
import '../style/Game.css';
import { useEffect, useState } from "react";
import Board from "./Board";
import Score from "./Score";
import PauseModal from './PauseModal';
import MockData from './MockData';
import { generateBoard, copyObject, uncoverAllBadTagedMines, uncoverAllMines, uncoverCascade } from "../logic/boardLogic.js"

function Game({ width, height, numberMines, test }) {

    const getBoardFromMockData = () => {
        return (generateBoard(width, height, numberMines))
    }

    const leftClickingCell = (positionX, positionY) => {
        if (gameStatus === 'before-start') {
            setGameStatus('playing')
        }
        const newBoard = copyObject(board)
        newBoard[positionY][positionX].isCovered = false
        if (board[positionY][positionX].isMine) {
            setGameStatus('lose')
            uncoverAllMines(newBoard, width, height)
            uncoverAllBadTagedMines(newBoard, width, height)
            newBoard[positionY][positionX].tagStatus = 'exploded'
        } else {
            let newRemainingCellsToWin = remainingCellsToWin
            if (board[positionY][positionX].tagStatus === 'flag') {
                setRemainingMines(remainingMines + 1)
            }
            if (board[positionY][positionX].minesAround === 0) {
                newRemainingCellsToWin -= uncoverCascade(newBoard, positionX, positionY, width, height)

            }
            setRemainingCellsToWin(newRemainingCellsToWin - 1)
        }
        setBoard(newBoard)
    }

    const rightClickingCell = (event, positionX, positionY) => {
        event.preventDefault()
        if (gameStatus === 'before-start') {
            setGameStatus('playing')
        }
        const newBoard = copyObject(board)
        if (board[positionY][positionX].tagStatus === 'hidden') {
            newBoard[positionY][positionX].tagStatus = 'flag'
            setRemainingMines(remainingMines - 1)
        } else if (board[positionY][positionX].tagStatus === 'flag') {
            newBoard[positionY][positionX].tagStatus = 'inconclusive'
            setRemainingMines(remainingMines + 1)
        } else {
            newBoard[positionY][positionX].tagStatus = 'hidden'
        }
        setBoard(newBoard)
    }

    const resetGame = () => {
        setRemainingMines(numberMines)
        setBoard(generateBoard(width, height, numberMines))
        setGameStatus('before-start')
        setRemainingCellsToWin(width * height - numberMines)
    }

    const pauseGame = () => {
        setGameStatus('pause')
    }

    const continueGame = () => {
        setGameStatus('playing')
    }

    const [board, setBoard] = useState(() => {
        let newBoard = null
        if (test === true) {
            newBoard = getBoardFromMockData()
        } else {
            newBoard = generateBoard(width, height, numberMines)
        }
        return (newBoard)
    })
    const [remainingMines, setRemainingMines] = useState(numberMines)
    const [gameStatus, setGameStatus] = useState('before-start')
    const [remainingCellsToWin, setRemainingCellsToWin] = useState(width * height - numberMines)

    useEffect(() => {
        if (remainingCellsToWin === 0) {
            setGameStatus('win')
            setRemainingMines(0)
        }
    }, [remainingCellsToWin])

    useEffect(() => {
        resetGame()
    }, [width, height, numberMines])

    return (
        <>
            {test && <MockData />}
            <table className="Game" >
                <Score remainingMines={remainingMines} resetGame={resetGame} gameStatus={gameStatus} pauseGame={pauseGame} continueGame={continueGame} />
                {(gameStatus === 'pause') && <PauseModal />}
                <Board board={board} leftClickingCell={leftClickingCell} rightClickingCell={rightClickingCell} gameStatus={gameStatus} />
            </table>
            <p data-testid='game-table'>test</p>
        </>
    );
}

export default Game;
