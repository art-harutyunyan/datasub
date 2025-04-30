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

Cypress.Commands.add(
  "shouldHaveErroredIcon",
  { prevSubject: true },
  (subject) => {
    cy.wrap(subject)
      .should("have.class", "is-invalid")
      .and("have.css", "background-image")
      .then((erroredIcon) => {
        expect(erroredIcon).to.include("data:image/svg+xml");
        expect(erroredIcon).to.include("%23dc3545");
        expect(erroredIcon).to.include("circle");
      });
    return cy.wrap(subject);
  }
);

Cypress.Commands.add(
  "shouldHaveCheckmarkIcon",
  { prevSubject: true },
  (subject) => {
    cy.wrap(subject)
      .should("have.class", "is-valid")
      .and("have.css", "background-image")
      .then((erroredIcon) => {
        expect(erroredIcon).to.include("data:image/svg+xml");
        expect(erroredIcon).to.include("%23198754");
        expect(erroredIcon).to.include("path");
      });
    return cy.wrap(subject);
  }
);
