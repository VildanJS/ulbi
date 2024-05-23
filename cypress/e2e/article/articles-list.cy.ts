describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles')
    })
  })
  it.skip('Пользователь переходит на страницу статей', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      console.log(err.message)
      return false
    })
    cy.get('[data-testid="ArticleList"]').should('exist')
    cy.get('[data-testid="ArticleListItem"]').should(
      'have.length.greaterThan',
      2,
    )
  })
  it('Пользователь переходит на страницу списка статей (стаб)', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      console.log(err.message)
      return false
    })
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
    cy.get('[data-testid="ArticleList"]').should('exist')
    cy.get('[data-testid="ArticleListItem"]').should(
      'have.length.greaterThan',
      2,
    )
  })
})
