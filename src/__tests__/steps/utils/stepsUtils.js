import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Game from '../../../components/Game'
import React from 'react'

export const openTheGame = () => {
    render(<Game width={8} height={8} numberMines={10} test={true} />)
}

export const fillMockData = (mockData) => {
    const text = screen.getByTestId('mockDataLoader-textarea')
    const button = screen.getByTestId('mockDataLoader-loadButton')
    userEvent.clear(text)
    userEvent.type(text, mockData)
    userEvent.click(button)
}

export const tagCell = (row, col, tag) => {
    if (tag === '!') {
        rightClickOnCell(1, row, col)
    } else if (tag === '?') {
        rightClickOnCell(2, row, col)
    }
}

export const leftClickOnCell = (row, col) => {
    userEvent.click(screen.getByTestId('Cell-' + row + '-' + col))
}

export const rightClickOnCell = (times, row, col) => {
    for (let i = 0; i < times; i++) {
        fireEvent.contextMenu(screen.getByTestId('Cell-' + row + '-' + col))
    }
}

export const allCellsHidden = () => {

}

export const allCellsEnabled = () => {

}

export const isUncovered = (row, col) => {
    const cell = screen.getAllByTestId('Cell-' + row + '-' + col)
    const cellContent = cell.textContent
    expect(cellContent).not.toBe(' ')
}

export const isDisabled = (row, col) => {

}

export const theCellIs = (row, col, status) => {
    const cell = screen.getByTestId('Cell-' + row + '-' + col)
    const cellText = screen.getByTestId('Cell-' + row + '-' + col + '-text')
    let display = status
    switch (status) {
        case '0':
        case '.':
            display = ' '
            break
        case '#':
            display = '☀'
        case '@':
            //expect(cellText).toHaveClass('cell-red')
            break
    }
    expect(cell.textContent).toBe(display)
}