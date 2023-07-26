import '../style/Score.css';
import { useEffect, useState } from "react";
import ResetButton from './ResetButton';
import pause from '../assets/pause-button.png'
import play from '../assets/play-button.png'

function Score({ remainingMines, resetGame, gameStatus, pauseGame, continueGame }) {

    const setPlayPauseStatus = () => {
        if (gameStatus === 'pause') {
            continueGame()
            setButtonImage(pause)
            startTimer()
        } else if (gameStatus === 'playing') {
            pauseGame()
            pauseTimer()
            setButtonImage(play)
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
    const [buttonImage, setButtonImage] = useState(pause)

    useEffect(() => {
        switch (gameStatus) {
            case 'before-start':
                resetTimer()
                break
            case 'playing':
                startTimer()
                break
            case 'win':
            case 'lose':
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
        <thead>
            <tr>
                <td className='Score'>
                    <div className='score-mines'>{remainingMines}</div>
                    <ResetButton gameStatus={gameStatus} resetGame={resetGame} />
                    <button className='button' onClick={setPlayPauseStatus}>
                        <img src={buttonImage}></img>
                    </button>
                    <div className='score-time'>{(gameStatus !== 'before-start') ? timer : ''}</div>
                </td>
            </tr>
        </thead>
    );
}

export default Score;