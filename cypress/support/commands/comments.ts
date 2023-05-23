
export const addComment = (text: string) => {
  cy.get('[data-testid="AddNewComment.Input"]').type(text)
  cy.get('[data-testid="AddNewComment.Button"]').click()
}


declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>
    }
  }
}
