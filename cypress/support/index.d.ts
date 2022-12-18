/// <reference types="cypress" />

type apiTasks = 'createStorableProduct' | 'createOrder' | 'checkinPatient';

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Logs in a user using UI
     * @example
     * cy.login('admin@unumed.com', 'dragonFruit')
     */
    login(username: string, password: string): Chainable<any>
  }
}

