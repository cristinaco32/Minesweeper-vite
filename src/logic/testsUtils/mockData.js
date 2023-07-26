import { fillBoardWithProximities, generateBoard } from "../boardLogic"

//TODO: controlar entrada mock data errònia + controlar l'altre format
export const generateBoardFromMockData = (mockData) => {
    let mockDataFormat = mockData.split('\n')
    mockDataFormat = mockDataFormat.map((row) => {
        return (row.split('|').filter(element => element).map((cell) => {
            return (cell.trim())
        }))
    })
    const board = mockDataFormat.map((row) => {
        return (row.map((cell) => {
            const newCell = {
                isCovered: true,
                isMine: false,
                minesAround: 0,
                tagStatus: 'hidden'
            }
            if (cell === '*') {
                newCell.isMine = true
                newCell.minesAround = -1
            }
            return (newCell)
        }))
    })

    console.log(board[0].length)

    fillBoardWithProximities(board, board[0].length, board.length)

    return (board)
}

export const countMines = (board) => {
    let numberMines = 0
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board[0].length; columnIndex++) {
            if (board[rowIndex][columnIndex].isMine) {
                numberMines++
            }
        }
    }
    return (numberMines)
}