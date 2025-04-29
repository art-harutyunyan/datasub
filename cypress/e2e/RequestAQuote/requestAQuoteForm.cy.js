describe("(Test suite for Request a Quote functionality)", () => {
  beforeEach(() => {
    cy.visit("/quote.html");
    cy.location("pathname").should("eq", "/quote.html");
  });

  it("Test-Case 1: Verify Request a quote form look&feel", () => {
    cy.get("#quoteForm")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      .should("be.visible")
      .parent("div")
      .should("be.visible")
      .and("have.class", "wow")
      .and("have.class", "zoomIn")
      .and("have.attr", "data-wow-delay", "0.9s")
      .and("have.css", "background-color", "rgb(6, 163, 218)");
  });

  it("Test-Case 2: Verify 'Your Name' input and its functionalities", () => {
    cy.get("#q_name")
      .should("be.visible")
      .and("have.class", "form-control bg-light border-0")
      .and("have.attr", "placeholder", "Your Name")
      .and("have.attr", "type", "text")
      .and("have.css", "background-color", "rgb(238, 249, 255)")
      .and("have.attr", "style", "height: 55px;")
      .focus()
      .type("Something here")
      .should("have.value", "Something here")
      .and("have.class", "is-valid")
      .clear()
      .type("s")
      .should("have.value", "s")
      .and("have.class", "is-invalid")
      .clear()
      .should("have.value", "");
  });
});
