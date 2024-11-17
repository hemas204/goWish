# Cypress Setup and Test Execution
Install Cypress

Step 1: Install Node.js and npm
Cypress requires **Node.js**. If you don't have it installed, download and install it from [nodejs.org](https://nodejs.org/).

Step 2: Install Cypress
To install Cypress, open your terminal, navigate to the project folder, and run:

npm init -y  # Initialize a new Node.js project
npm install cypress --save-dev  # Install Cypress as a dev dependency

Step 3: Running the Tests
After setting up everything, you can run Cypress tests using the following steps:

- Open Cypress Test Runner
Run this command to open the Cypress Test Runner:

npx cypress open

- Run the Test
In the Cypress Test Runner, click on the test file "gowish.cy.js" to run it