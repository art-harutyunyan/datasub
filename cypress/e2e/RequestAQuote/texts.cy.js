describe("(Test suite for Request a Quote block look&feel)", () => {
  beforeEach(() => {
    cy.visit("/quote.html");
    cy.location("pathname").should("eq", "/quote.html");
  });

  it("Test-Case 1: Verify if the header contains 'Request A Qupte' text", () => {
    cy.get(".stop-animation>h5")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      .should("contain", "Request A Quote")
      .and("be.visible")
      .and("have.class", "text-uppercase")
      .and("have.class", "fw-bold")
      .and("have.class", "text-primary")
      .and("have.css", "color", "rgb(6, 163, 218)");
  });

  it("Test-Case 2: Verify if the 'Need A Free Quote' text", () => {
    cy.get(".stop-animation>h1")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      .should("contain", "Need A Free Quote? Please Feel Free to Contact Us")
      .and("be.visible");
  });

  it('Test-Case 3: Verify the blue line below the "Need A Free Quote" text', () => {
    cy.checkPseudoElement(".stop-animation", "::before", {
      "background-color": "rgb(6, 163, 218)",
      width: "150px",
      height: "5px",
      left: "0px",
      bottom: "0px",
      content: '""',
      position: "absolute",
      "border-radius": "2px",
    });

    cy.checkPseudoElement(".stop-animation", "::after", {
      "background-color": "rgb(255, 255, 255)",
      width: "6px",
      height: "5px",
      content: '""',
      position: "absolute",
    });
  });

  it("Test-Case 4: Verify telephone support section", () => {
    // Veifying if the "Reply within 24 hours" icon and text are visible properly
    cy.contains("h5", "Reply within 24 hours")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      .should("be.visible")
      .parent("div")
      .should("have.class", "wow")
      .and("have.class", "zoomIn")
      .and("have.attr", "data-wow-delay", "0.2s")
      .find("i")
      .should("be.visible")
      .and("have.class", "fa")
      .and("have.class", "text-primary")
      .and("have.css", "color", "rgb(6, 163, 218)");

    // Veifying if the "24 hrs telephone support" icon and text are visible properly
    cy.contains("h5", "24 hrs telephone support")
      .should("be.visible")
      .parent("div")
      .should("have.class", "wow")
      .and("have.class", "zoomIn")
      .and("have.attr", "data-wow-delay", "0.4s")
      .find("i")
      .should("be.visible")
      .and("have.class", "fa")
      .and("have.class", "fa-phone-alt")
      .and("have.class", "text-primary")
      .and("have.css", "color", "rgb(6, 163, 218)");
  });

  it("Test-Case 5: Verify the 'Call to ask any question' section", () => {
    cy.contains("h5", "Call to ask any question")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      .should("be.visible")
      .siblings("h4")
      .should("have.text", "+012 345 6789")
      .and("be.visible")
      .and("have.class", "text-primary")
      .parents("div.d-flex")
      .should("have.class", "wow")
      .and("have.class", "zoomIn")
      .and("have.attr", "data-wow-delay", "0.6s")
      .find("i")
      .should("be.visible")
      .and("have.class", "fa")
      .and("have.class", "fa-phone-alt")
      .and("have.class", "text-white")
      .parent("div")
      .should("have.class", "bg-primary")
      .and("have.attr", "style", "width: 60px; height: 60px;");
  });
});
