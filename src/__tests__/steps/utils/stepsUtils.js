import { render, screen, fireEvent } from '@testing-library/react'
import Game from '../../../components/Game'
import React from 'react'

export const openTheGame = () => {
    render(<Game width={8} height={8} numberMines={10} test={true} />)
}

export const fillMockData = (docString) => {

}

export const tagCell = (row, col, tag) => {

}

export const leftClickOnCell = (row, col) => {

}

export const rightClickOnCell = (times, row, col) => {

}

export const allCellsHidden = () => {

}

export const allCellsEnabled = () => {

}

export const isUncovered = (row, col) => {

}

export const isDisabled = (row, col) => {

}

export const theCellIs = (row, col, status) => {

}