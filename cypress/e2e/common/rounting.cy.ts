describe('Роутинг', () => {
  it('Переход на главную страницу', () => {
    cy.visit('/')
    cy.get('[data-testid=MainPage]').should('exist')
  })
  it('Переход на главную страницу для неавторизованного пользователя', () => {
    cy.visit('/profile/1')
    cy.get('[data-testid=MainPage]').should('exist')
  })
  it('Переход на несуществующую страницу', () => {
    cy.visit('/drags')
    cy.get('[data-testid=NotFoundPage]').should('exist')
  })
  it('Переход на страницу для авторизованного пользователя', () => {
    cy.login('admin', '123')
    cy.visit('/profile/1')
    cy.get('[data-testid=ProfilePage]').should('exist')
  })
})
