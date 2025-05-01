# Cypress Tests for DataSub

This README provides instructions for running Cypress tests for the DataSub project. Follow the steps below to set up and execute the tests.

## Prerequisites

- Ensure you have Node.js installed on your system.
- Install Cypress globally or as a dev dependency in the project.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/datasub.git
   ```
2. Navigate to the project directory:
   ```bash
   cd datasub
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Cypress Tests

1. Open the Cypress Test Runner:

   ```bash
   npx cypress open
   ```

   This will launch the Cypress GUI where you can select and run tests.

2. Run tests in headless mode:
   ```bash
   npx cypress run
   ```
   This will execute all tests in the terminal.

## Test Structure

- All test files are located in the `cypress/e2e` directory.
- Fixtures and custom commands can be found in the `cypress/fixtures` and `cypress/support` directories, respectively.

## Writing New Tests

1. Create a new test file in the `cypress/e2e` directory:
   ```bash
   touch cypress/e2e/your-test-name.cy.js
   ```
2. Write your test cases using the Cypress API.
