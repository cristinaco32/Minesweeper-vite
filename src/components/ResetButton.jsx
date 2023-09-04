import React from 'react';
import { useEffect, useState } from "react";
import { GAME_STATUS } from '../constants';
import happyFace from '../assets/win.gif';
import sadFace from '../assets/lose.gif';
import neutralFace from '../assets/playing.gif';

function ResetButton({ gameStatus, resetGame }) {

    const [imagePath, setImagePath] = useState(neutralFace)

    useEffect(() => {
        switch (gameStatus) {
            case GAME_STATUS.beforeStart:
            case GAME_STATUS.playing:
                setImagePath(neutralFace)
                break
            case GAME_STATUS.won:
                setImagePath(happyFace)
                break
            case GAME_STATUS.lost:
                setImagePath(sadFace)
                break
        }
    }, [gameStatus])

    return (
        <button className='w-10 h-10 m-0.5 bg-ms-color-3 p-1.5 align-middle cursor-pointer' data-testid='reset-button' onClick={resetGame}>
            <img className="w-6 h-6 overflow-clip" src={imagePath} alt={gameStatus}></img>
        </button>

    );
}

export default ResetButton;
