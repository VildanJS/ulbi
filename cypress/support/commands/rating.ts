import { selectByTestId } from '../../helpers/selectByTestId'

export const setRate = (starsCount: number, feedback: string) => {
  const value = `Star.${starsCount}`
  cy.get(selectByTestId(value)).click()
  cy.get('[data-testid="RatingCard.Input"]').type(feedback)
  cy.get('[data-testid="RatingCard.Send"]').click()
}

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starsCount: number, feedback: string): Chainable<void>
    }
  }
}

