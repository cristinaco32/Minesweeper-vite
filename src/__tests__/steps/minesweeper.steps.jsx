import '@testing-library/jest-dom/extend-expect'
import { openTheGame, fillMockData, tagCell, leftClickOnCell, rightClickOnCell, allCellsHidden, allCellsEnabled, isUncovered, isDisabled, theCellIs } from './utils/stepsUtils.js'

export const minesweeperSteps = ({
    given: Given,
    and: And,
    when: When,
    then: Then
}) => {
    Given(/^the player opens the game$/, () => {
        openTheGame()
    })
    Given('the player loads the following mock data:', (docString) => {
        fillMockData(docString)
    });
    And(/^the player puts "(.*)" in the cell \((\d+),(\d+)\)$/, (tag, row, col) => {
        tagCell(row, col, tag)
    });
    When(/^the player left clicks the cell \((\d+),(\d+)\)$/, (row, col) => {
        leftClickOnCell(row, col)
    });
    When(/^the player uncovers the cell \((\d+),(\d+)\)$/, (row, col) => {
        leftClickOnCell(row, col)
    });
    When(/^the player right clicks "(.*)" times on the cell \((\d+),(\d+)\)$/, (times, row, col) => {
        rightClickOnCell(times, row, col)
    });
    Then(/^all the cells should be hidden$/, () => {
        allCellsHidden()
    })
    Then(/^all the cells should be enabled$/, () => {
        allCellsEnabled()
    })
    Then(/^the cell \((\d+),(\d+)\) should be uncovered$/, (row, col) => {
        isUncovered(row, col)
    });
    Then(/^the cell \((\d+),(\d+)\) should be disabled$/, (row, col) => {
        isDisabled(row, col)
    });
    Then(/^the cell \((\d+),(\d+)\) should be "(.*)"$/, (row, col, status) => {
        theCellIs(row, col, status)
    });
}
export default minesweeperSteps