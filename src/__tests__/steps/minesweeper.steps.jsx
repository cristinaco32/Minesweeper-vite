import React from 'react'
import { render, screen } from '@testing-library/react'
import  Game  from '../../components/Game.jsx'
import '@testing-library/jest-dom/extend-expect'

export const minesweeperSteps = ({
    given: Given,
    and: And,
    when: When,
    then: Then
}) => {
    Given(/^the player opens the game$/, () => {
        render(<Game width={8} height={8} numberMines={10} test={true} />)
    })
    Then(/^all the cells should be hidden$/, () => {
        const game = screen.getByTestId('game-table')
        expect(game).toHaveTextContent('test')
    })
}
export default minesweeperSteps