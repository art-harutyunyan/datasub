describe("Test suite for Request a Quote functionality", () => {
  beforeEach(() => {
    cy.visit("/quote.html");
    cy.location("pathname").should("eq", "/quote.html");
    cy.get("#quoteForm").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });

  it("Test Case 1: Verify blank requesst", () => {
    cy.contains("button", "Request A Quote").click();
    cy.get("#q_name").shouldHaveErroredIcon();
    cy.get("#q_email").shouldHaveErroredIcon();
    cy.get("#q_message").shouldHaveErroredIcon();
  });

  it("Test Case 2: Verify correct request a quote", () => {
    cy.get("#q_name").type("Marcus Aurelius").shouldHaveCheckmarkIcon();
    cy.get("#q_email").type("marcus@fake.com").shouldHaveCheckmarkIcon();
    cy.get("#q_message")
      .type(
        "You have power over your mind — not outside events. Realize this, and you will find strength"
      )
      .shouldHaveCheckmarkIcon();
    cy.contains("button", "Request A Quote").click();
    cy.get("#quoteStatus")
      .should("be.visible")
      .and("have.text", "Форма отправлена успешно!")
      .and("have.class", "text-success")
      .and("have.css", "color", "rgb(25, 135, 84)");
  });
});
