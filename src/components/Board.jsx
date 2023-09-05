import React from 'react';
import Cell from "./Cell";
import { GAME_STATUS } from '../constants';

function Board({ board, leftClickingCell, rightClickingCell, gameStatus }) {

    return (
        <tbody data-testid='board' className={(gameStatus === GAME_STATUS.playing || gameStatus === GAME_STATUS.beforeStart) ? "mb-1 flex flex-col self-center" : "mb-1 pointer-events-none flex flex-col self-center"}>
            {
                board.map((row, indexY) => {
                    return (
                        <tr key={indexY} className='table-row self-center border-0 p-0 m-0'>
                            {row.map((cell, indexX) => {
                                return (
                                    <Cell
                                        positionX={indexX}
                                        positionY={indexY}
                                        isMine={cell.isMine}
                                        minesAround={cell.minesAround}
                                        isCovered={cell.isCovered}
                                        tagStatus={cell.tagStatus}
                                        leftClickingCell={leftClickingCell}
                                        rightClickingCell={rightClickingCell}
                                        gameStatus={gameStatus}
                                        key={indexX.toString() + '-' + indexY.toString()}
                                    />
                                )
                            })}
                        </tr>
                    )
                })
            }
        </tbody>
    );
}

export default Board;