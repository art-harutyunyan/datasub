describe("(Test suite for Request a Quote inputs look&feel and functionality)", () => {
  beforeEach(() => {
    cy.visit("/quote.html");
    cy.location("pathname").should("eq", "/quote.html");
    cy.get("#quoteForm").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });

  it("Test-Case 1: Verify Request a quote form look&feel", () => {
    cy.get("#quoteForm")
      .should("be.visible")
      .parent("div")
      .should("be.visible")
      .and("have.class", "wow")
      .and("have.class", "zoomIn")
      .and("have.attr", "data-wow-delay", "0.9s")
      .and("have.css", "background-color", "rgb(6, 163, 218)");
  });

  it("Test-Case 2: Verify 'Your Name' input and its functionality", () => {
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
      .shouldHaveCheckmarkIcon()
      .clear()
      .type("s")
      .should("have.value", "s")
      .and("have.class", "is-invalid")
      .shouldHaveErroredIcon()
      .clear()
      .should("have.value", "");
  });

  it('Test Case 3: Verify "Your Email" input and its functionality', () => {
    cy.get("#q_email")
      .should("be.visible")
      .and("have.class", "form-control bg-light border-0")
      .and("have.attr", "placeholder", "Your Email")
      .and("have.attr", "type", "email")
      .and("have.css", "background-color", "rgb(238, 249, 255)")
      .and("have.attr", "style", "height: 55px;")
      .focus()
      .type("some@fake.com")
      .should("have.value", "some@fake.com")
      .shouldHaveCheckmarkIcon()
      .clear()
      .type("s")
      .should("have.value", "s")
      .shouldHaveErroredIcon()
      .clear()
      .should("have.value", "");
  });

  it('Test Case 4: Verify "Select a Service" dropdown and its functionality', () => {
    cy.get("#q_service")
      .should("be.visible")
      .and("have.class", "form-select bg-light border-0")
      .and("have.attr", "style", "height: 55px;")
      .and("have.css", "background-color", "rgb(238, 249, 255)");

    cy.get("#q_service").select("Service 1").should("have.value", "Service 1");
    cy.get("#q_service").select("Service 2").should("have.value", ""); // the html is incosistent, needs to be fixed here
    cy.get("#q_service").select("Service 3").should("have.value", "Service 3");
    cy.get("#q_service").select("Select A Service").should("have.value", "");

    cy.get("#q_service")
      .find("option")
      .should("have.length", 4)
      .then((a) => {
        expect(a[0]).to.have.text("Select A Service").and.have.attr("selected");
        expect(a[1]).to.have.text("Service 1");
        expect(a[2]).to.have.text("Service 2");
        expect(a[3]).to.have.text("Service 3");
      });
  });

  it('Test Case 5: Verify "Message" textarea and its functionality', () => {
    cy.get("#q_message")
      .should("be.visible")
      .and("have.class", "form-control bg-light border-0")
      .and("have.attr", "placeholder", "Message")
      .and("have.attr", "rows", "3")
      .and("have.css", "background-color", "rgb(238, 249, 255)")
      .focus()
      .type("four")
      .should("have.value", "four")
      .shouldHaveErroredIcon()
      .clear()
      .type("longer than 4 characters")
      .should("have.value", "longer than 4 characters")
      .and("have.class", "is-valid")
      .shouldHaveCheckmarkIcon();
  });

  it('Test Case 6: Verify "Request A Quote" button and its functionality', () => {
    cy.contains("button", "Request A Quote")
      .should("be.visible")
      .and("have.class", "btn")
      .and("have.class", "btn-dark")
      .and("have.class", "w-100")
      .and("have.class", "py-3")
      .and("have.css", "background-color", "rgb(9, 30, 62)")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "border-color", "rgb(9, 30, 62)");
  });
});
