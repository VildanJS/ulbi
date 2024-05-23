export const updateProfile = (firstname: string, secondname: string) => {
  cy.get('[data-testid="ProfileCard.EditButton"]').click()
  cy.get('[data-testid="ProfileCard.firstname"]').clear().type(firstname)
  cy.get('[data-testid="ProfileCard.lastname"]').clear().type(secondname)
  cy.get('[data-testid="ProfileCard.SubmitButton"]').click()
}

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
      id: '4',
      firstname: 'test',
      lastname: 'user',
      age: 465,
      currency: 'EUR',
      country: 'Ukraine',
      city: 'Moscow',
      username: 'testuser',
      avatar:
        'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, secondname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
