/// <reference types="cypress" />

describe('Input Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-input--default');
    cy.get('#storybook-root').should('be.visible');
  });

  it('should handle input interactions', () => {
    // 基本輸入測試
    cy.get('input')
      .should('be.visible')
      .type('Hello World')
      .should('have.value', 'Hello World');

    // 禁用狀態測試
    cy.visit('/iframe.html?id=components-input--disabled');
    cy.get('input')
      .should('be.disabled')
      .should('have.class', 'bg-gray-100');

    // 錯誤狀態測試
    cy.visit('/iframe.html?id=components-input--with-error');
    cy.get('input')
      .should('have.class', 'border-red-500');
    cy.get('.text-red-500')
      .should('be.visible');
  });
}); 