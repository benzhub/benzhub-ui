describe('Button Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-button--default');
    cy.get('#storybook-root').should('be.visible');
  });

  it('should render and handle interactions', () => {
    cy.get('button:contains("Click Me")').first()
      .should('be.visible')
      .click();

    cy.get('[data-testid="loading-spinner"]', { timeout: 6000 })
      .should('be.visible');
  });
}); 