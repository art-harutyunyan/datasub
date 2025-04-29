// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  "checkPseudoElement",
  (selector, pseudoElement, expectedStyles) => {
    cy.get(selector).then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const computed = win.getComputedStyle($el[0], pseudoElement);

      for (const [prop, expectedValue] of Object.entries(expectedStyles)) {
        const actualValue = computed.getPropertyValue(prop);
        expect(actualValue.trim()).to.eq(expectedValue);
      }
    });
  }
);
