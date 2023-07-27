import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Game from '../../../components/Game'
import React from 'react'

export const openTheGame = () => {
    render(<Game width={8} height={8} numberMines={10} test={true} />)
}

export const fillMockData = async(mockData) => {
    const text = screen.getByTestId('mockDataLoader-textarea')
    const button = screen.getByTestId('mockDataLoader-loadButton')
    await userEvent.clear(text)
    await userEvent.type(text, mockData)
    await userEvent.click(button)
}

export const tagCell = async(row, col, tag) => {
    const cell = screen.getByTestId('Cell-' + row + '-' + col)
    const cellText = cell.querySelector('p').textContent
    switch (tag) {
        case '!': {
            if (cellText === ' ') {
                await userEvent.contextMenu(cell)
            } else if (cellText === '?') {
                await userEvent.contextMenu(cell)
                await userEvent.contextMenu(cell)
            }
            break
        }
        case '?': {
            if (cellText === ' ') {
                await userEvent.contextMenu(cell)
                await userEvent.contextMenu(cell)
            } else if (cellText === '!') {
                await userEvent.contextMenu(cell)
            }
            break
        }
    }
}

export const leftClickOnCell = async(row, col) => {
    await userEvent.click(screen.getByTestId('Cell-' + row + '-' + col))
}

export const rightClickOnCell = async(times, row, col) => {
    for (let i = 0; i < times; i++) {
        await userEvent.contextMenu(screen.getByTestId('Cell-' + row + '-' + col))
    }
}

export const allCellsHidden = () => {
    const board = screen.getByTestId('board')
    const cells = board.querySelector('td')
    cells.forEach((cell) => {
        expect(cell).toHaveTextContent('')
    })
}

export const allCellsEnabled = () => {
    const board = screen.getByTestId('board')
    expect(board).not.toHaveClass('disabled')
}

export const allCellsDisabled = () => {
    const board = screen.getByTestId('board')
    expect(board).toHaveClass('disabled')
}

export const isUncovered = (row, col) => {
    const cell = screen.getByTestId('Cell-' + row + '-' + col)
    const cellContent = cell.textContent
    expect(cellContent).not.toBe(' ')
    expect(cellContent).not.toBe('!')
    expect(cellContent).not.toBe('?')
}

export const isDisabled = (row, col) => {
    const cell = screen.getByTestId('Cell-' + row + '-' + col)
    expect(cell).toHaveClass('uncovered')
}

export const theCellIs = (row, col, status) => {
    const cell = screen.getByTestId('Cell-' + row + '-' + col)
    const cellText = screen.getByTestId('Cell-' + row + '-' + col + '-text')
    let display = status
    switch (status) {
        case '0':
            display = ' '
        case '.':
            display = ''
            break
        case '@':
            expect(cellText).toHaveClass('cell-red')
        case '#':
            display = '☀'
            break
    }
    expect(cell.textContent).toBe(display)
}

export const resetButtonIs = (status) => {
    const resetButton = screen.getByTestId('reset-button')
    const img = resetButton.querySelector('img')
    expect(img).toHaveProperty('src', `/src/assets/${status}.gif`)
}