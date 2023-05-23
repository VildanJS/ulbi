// noinspection TypeScriptValidateJSTypes

const currentArticleId = '222'
describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login()
    // cy.createArticle().then((article) => {
    //   currentArticleId = article.id
    //   cy.visit(`articles/${article.id}`)
    // })
    cy.visit(`articles/${currentArticleId}`)
  })
  afterEach(() => {
    // cy.removeArticle(currentArticleId)
  })
  it.skip('И видит содержимое статьи', () => {
    cy.get('[data-testid="ArticleDetails"]').should('exist')
  })
  it.skip('И оставляет комментарий', () => {
    cy.get('[data-testid="ArticleDetails"]').should('exist')
    cy.get('[data-testid="AddNewCommentElement"]').scrollIntoView()
    cy.addComment('some comment')
    cy.get('[data-testid="CommentCard.Content"]').should('exist')
  })
  it('И ставит оценку', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
    cy.get('[data-testid="ArticleDetails"]').should('exist')
    cy.get('[data-testid="RatingCard"]').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })
})
