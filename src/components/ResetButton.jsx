import React from 'react';
import { useEffect, useState } from "react";
import happyFace from '../assets/win.gif';
import sadFace from '../assets/lose.gif';
import neutralFace from '../assets/playing.gif';

function ResetButton({ gameStatus, resetGame }) {

    const [imagePath, setImagePath] = useState(neutralFace)

    useEffect(() => {
        switch (gameStatus) {
            case 'before-start':
            case 'playing':
                setImagePath(neutralFace)
                break
            case 'win':
                setImagePath(happyFace)
                break
            case 'lose':
                setImagePath(sadFace)
                break
        }
    }, [gameStatus])

    return (
        <button className='button' onClick={resetGame}>
            <img src={imagePath}></img>
        </button>

    );
}

export default ResetButton;
