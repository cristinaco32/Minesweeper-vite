import React from 'react';
import { useEffect, useState } from 'react';
import { GAME_STATUS, TAG_STATUS } from '../constants';
// import '../style/Cell.css';

function Cell({ positionX, positionY, isMine, minesAround, isCovered, tagStatus, leftClickingCell, rightClickingCell, gameStatus }) {
   
    const changeDisplayWhenPlaying = () => {
        if (!isCovered) {
            if (minesAround > 0) {
                setDisplay(minesAround)
                let colorTextCell = "text-neutral-950"
                switch (minesAround) {
                    case 1:
                        colorTextCell = "text-blue-500"
                        break
                    case 2:
                        colorTextCell = "text-green-500"
                        break
                    case 3:
                        colorTextCell = "text-red-500"
                        break
                    case 4:
                        colorTextCell = "text-purple-500"
                        break
                    case 5:
                        colorTextCell = "text-teal-500"
                        break
                }
                setColorClassName(`${colorTextCell}`)
            } else {
                setDisplay(TAG_STATUS.emptyCell)
            }
        } else {
            if (tagStatus === 'inconclusive') {
                setDisplay(TAG_STATUS.inconclusive)
            } else if (tagStatus === 'flag') {
                setDisplay(TAG_STATUS.flag)
            } else {
                setDisplay(TAG_STATUS.hidden)
            }
        }
    }

    const changeDisplayWhenLose = () => {
        if (isMine && tagStatus !== 'flag') {
            setDisplay(TAG_STATUS.mine)
            if (tagStatus === 'exploded') {
                setColorClassName('text-red-600')
            }
        }
        if (!isMine && tagStatus === 'flag') {
            setDisplay(TAG_STATUS.wronglyTagged)
            setColorClassName('text-red-600')
        }
    }

    const changeDisplayWhenWin = () => {
        if (isMine) {
            setDisplay(TAG_STATUS.flag)
        }
    }

    const [display, setDisplay] = useState(TAG_STATUS.hidden)
    const [colorClassName, setColorClassName] = useState('')
    const cellClass = "table-cell box-border w-6 min-w-24 max-w-24 h-6 min-h-24 max-h-24 text-base/[18px] font-bold cursor-pointer"
    const coveredClass = "m-0 border-2 border-solid border-t-ms-color-1 border-r-ms-color-2 border-b-ms-color-2 border-l-ms-color-1 bg-ms-color-3 p-0 align-middle text-center"
    const uncoveredClass = "m-0 bg-ms-color-4 border border-solid border-ms-color-2 p-px cursor-default pointer-events-none"
    const pClass = "text-center align-middle text-base/[18px] font-bold m-0"

    useEffect(() => {
        switch (gameStatus) {
            case GAME_STATUS.beforeStart:
                setDisplay(TAG_STATUS.hidden)
                setColorClassName('')
                break
            case GAME_STATUS.playing:
                changeDisplayWhenPlaying()
                break
            case GAME_STATUS.lost:
                changeDisplayWhenLose()
                break
            case GAME_STATUS.won:
                changeDisplayWhenWin()
                break
        }
    }, [tagStatus, gameStatus, isCovered])

    return (
        <td
            className={(isCovered) ? `${cellClass} ${coveredClass}` : `${cellClass} ${uncoveredClass}`}
            data-testid={'Cell-' + (positionY+1).toString() + '-' + (positionX+1).toString()}
            onClick={() => { leftClickingCell(positionX, positionY) }}
            onContextMenu={(event) => { rightClickingCell(event, positionX, positionY) }}
        >
            <p className={`${pClass} ${colorClassName}`} data-testid={'Cell-' + (positionY+1).toString() + '-' + (positionX+1).toString() + '-text'}>{display}</p>
        </td>
    );
}

export default Cell;
