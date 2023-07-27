import '@testing-library/jest-dom/extend-expect'
import { openTheGame, fillMockData, tagCell, leftClickOnCell, rightClickOnCell, allCellsHidden, allCellsEnabled, allCellsDisabled, isUncovered, isCovered, isDisabled, theCellIs, theCounterIs, resetButtonIs } from './utils/stepsUtils.js'

export const minesweeperSteps = ({
    given: Given,
    and: And,
    when: When,
    then: Then
}) => {
    Given(/^the player opens the game$/, () => {
        openTheGame()
    })
    Given('the player loads the following mock data:', async(docString) => {
        await fillMockData(docString)
    })
    And(/^the player puts "(.*)" in the cell \((\d+),(\d+)\)$/, async(tag, row, col) => {
        await tagCell(row, col, tag)
    })
    When(/^the player left clicks the cell \((\d+),(\d+)\)$/, async(row, col) => {
        await leftClickOnCell(row, col)
    })
    When(/^the player uncovers the cell \((\d+),(\d+)\)$/, async(row, col) => {
        await leftClickOnCell(row, col)
    })
    When(/^the player right clicks "(.*)" times on the cell \((\d+),(\d+)\)$/, async(times, row, col) => {
        await rightClickOnCell(times, row, col)
    })
    Then(/^all the cells should be hidden$/, () => {
        allCellsHidden()
    })
    Then('all the cells should be enabled', () => {
        allCellsEnabled()
    })
    Then('all the cells should be disabled', () => {
        allCellsDisabled()
    })
    Then(/^the cell \((\d+),(\d+)\) should be uncovered$/, (row, col) => {
        isUncovered(row, col)
    })
    Then(/^the cell \((\d+),(\d+)\) should be disabled$/, (row, col) => {
        isDisabled(row, col)
    })
    Then(/^the cell \((\d+),(\d+)\) should be "(.*)"$/, (row, col, status) => {
        theCellIs(row, col, status)
    })
    Then('the player should lose', () => {
        resetButtonIs('lose')
    })
    Then('the player should win', () => {
        resetButtonIs('win')
    })
    And(/^the cell \((\d+),(\d+)\) should be covered$/, (row, col) => {
        isCovered(row, col)
    })
    Then(/^the counter should be "(.*)"$/, (num) => {
        theCounterIs(num)
    })
}
export default minesweeperSteps