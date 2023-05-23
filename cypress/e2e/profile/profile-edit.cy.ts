let profileId = '4'
describe('Редактирование профиля', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then(data => {
      cy.resetProfile(profileId)
      cy.visit(`profile/${data.id}`)
      profileId = data.id
    })
  })

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('Данные должны соответсвовать с бд', () => {
    cy.get('[data-testid="ProfileCard.firstname"]').should('have.value', 'test')
  })
  it('Проверка возможости редактировать профиль', () => {
    const newFirstName = 'first'
    const newSecondName = 'second'
    cy.updateProfile(newFirstName, newSecondName)
    cy.get('[data-testid="ProfileCard.firstname"]').should('have.value', newFirstName)
    cy.get('[data-testid="ProfileCard.lastname"]').should('have.value', newSecondName)
  })
})
