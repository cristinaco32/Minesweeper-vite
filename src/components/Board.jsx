import React from 'react';
import '../style/Board.css';
import Cell from "./Cell";

function Board({ board, leftClickingCell, rightClickingCell, gameStatus }) {

    return (
        <tbody className={(gameStatus === 'playing' || gameStatus === 'before-start') ? "Board" : "Board disabled"}>
            {
                board.map((row, indexY) => {
                    return (
                        <tr key={indexY}>
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