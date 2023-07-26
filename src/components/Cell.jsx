import React from 'react';
import { useEffect, useState } from 'react';
import '../style/Cell.css';

//TODO: el dissabled va cutre
function Cell({ positionX, positionY, isMine, minesAround, isCovered, tagStatus, leftClickingCell, rightClickingCell, gameStatus }) {
   
    const changeDisplayWhenPlaying = () => {
        if (!isCovered) {
            if (minesAround > 0) {
                setDisplay(minesAround)
                setColorClassName(`cell-${minesAround}`)
            } else {
                setDisplay(' ')
            }
        } else {
            if (tagStatus === 'inconclusive') {
                setDisplay('?')
            } else if (tagStatus === 'flag') {
                setDisplay('!')
            } else {
                setDisplay(' ')
            }
        }
    }

    const changeDisplayWhenLose = () => {
        if (isMine && tagStatus !== 'flag') {
            setDisplay('☀')
            if (tagStatus === 'exploded') {
                setColorClassName('cell-red')
            }
        }
        if (!isMine && tagStatus === 'flag') {
            setDisplay('×')
            setColorClassName('cell-red')
        }
    }

    const changeDisplayWhenWin = () => {
        if (isMine) {
            setDisplay('!')
        }
    }

    const [display, setDisplay] = useState(null)
    const [colorClassName, setColorClassName] = useState('')

    useEffect(() => {
        switch (gameStatus) {
            case "before-start":
                setDisplay('')
                setColorClassName('')
                break
            case "playing":
                changeDisplayWhenPlaying()
                break
            case "lose":
                changeDisplayWhenLose()
                break
            case "win":
                changeDisplayWhenWin()
                break
        }
    }, [tagStatus, gameStatus, isCovered])

    return (
        <td
            className={(isCovered) ? "Cell covered" : "Cell uncovered"}
            data-testid={'Cell-' + positionY.toString() + '-' + positionX.toString()}
            onClick={() => { leftClickingCell(positionX, positionY) }}
            onContextMenu={(event) => { rightClickingCell(event, positionX, positionY) }}
        >
            {<p className={colorClassName}>{display}</p>}
        </td>
    );
}

export default Cell;
