import React from 'react';
import { useEffect, useState } from "react";
import ResetButton from './ResetButton';
import { GAME_STATUS } from '../constants';
import pauseImg from '../assets/pause-button.png'
import playImg from '../assets/play-button.png'

function Score({ remainingMines, gameStatus, resetGame, pauseGame, continueGame }) {

    const changePlayPauseStatus = () => {
        if (gameStatus === GAME_STATUS.paused) {
            continueGame()
            startTimer()
            setButtonImage(pauseImg)
        } else if (gameStatus === GAME_STATUS.playing) {
            pauseGame()
            pauseTimer()
            setButtonImage(playImg)
        } 
    }

    const startTimer = () => {
        clearInterval(timerId)
        const newTimerId = setInterval(() => {
            setTimer((t) => t + 1)
        }, 1000)
        setTimerId(newTimerId)
    }

    const pauseTimer = () => {
        clearInterval(timerId)
        setTimerId(null)
    }

    const resetTimer = () => {
        clearInterval(timerId)
        setTimer(0)
    }

    const [timer, setTimer] = useState(0)
    const [timerId, setTimerId] = useState(null)
    const [buttonImage, setButtonImage] = useState(pauseImg)

    useEffect(() => {
        switch (gameStatus) {
            case GAME_STATUS.beforeStart:
                resetTimer()
                break
            case GAME_STATUS.playing:
                startTimer()
                break
            case GAME_STATUS.won:
            case GAME_STATUS.lost:
                pauseTimer()
                break
        }
    }, [gameStatus])

    useEffect(() => {
        if (timer > 999) {
            setTimer('∞')
            pauseTimer()
        }
    }, [timer])

    return (
        <thead className="flex flex-col self-center">
            <tr className="table-row">
                <td className="flex flex-row justify-between items-center bg-ms-color-3 m-0 border-2 border-solid border-t-ms-color-1 border-r-ms-color-2 border-b-ms-color-2 border-l-ms-color-1 p-0 align-middle text-center">
                    <div data-testid='mines-counter' className="m-2.5 w-[1.75em] border-[1px] border-solid border-t-ms-color-1 border-r-black border-b-black border-l-ms-color-1 pr-[3px] min-h-24 bg-black text-red-600 text-2xl/[1] font-bold text-right block">{remainingMines}</div>
                    <ResetButton gameStatus={gameStatus} resetGame={resetGame} />
                    <button className='w-10 h-10 m-0.5 bg-ms-color-3 p-1.5 align-middle cursor-pointer' onClick={changePlayPauseStatus}>
                        <img className="w-6 h-6 overflow-clip" src={buttonImage}></img>
                    </button>
                    <div data-testid='time-counter' className="m-2.5 w-[1.75em] border-[1px] border-solid border-t-ms-color-1 border-r-black border-b-black border-l-ms-color-1 pr-[3px] min-h-24 bg-black text-red-600 text-2xl/[1] font-bold text-right block">{(gameStatus !== GAME_STATUS.beforeStart) ? timer : ''}</div>
                </td>
            </tr>
        </thead>
    );
}

export default Score;