# phe-demo

##  install node js
##  npm init
##  npm install
##  sudo npm install cypress --save-dev
##  npx cypress open


- ### Fixtures are external pieces of static data that can be used by your tests. We should not hard code data in the test case. It should drive from an external source like CSV, HTML, or JSON. They will be majorly used with the cy.fixture() command when you need to stub the network calls. 

- ### The integration folder provides a place that writes out test cases. It also provides an “examples” directory, which contains the default test cases provided by Cypress and can be used to add new test cases also. We can also create our folder under the integration directory and add out test cases under that.

- ### Plugins contain the plugins or listeners. By default, Cypress will automatically include the plugins file “cypress/plugins/index.js” before every test it runs. You can programmatically alter the resolved configuration and environment variables using plugins, Eg. If we have to inject customized options to browsers like accepting the certificate, or do any activity on test case pass or fail or to handle any other events like handling screenshots. They enable you to extend or modify the existing behavior of Cypress. 

- ### Support writes customized commands or reusable methods that are available for usage in all of your spec/test files. This file runs before every single spec file. That’s why you don’t have to import this file in every single one of your spec files.  The “support” file is a great place to put reusable behavior such as Custom Commands or global overrides that you want to be applied and available to all of your spec files. 

- ### Node_Modules in the default project structure is the heart of the cypress project. All the node packages will be installed in the node_modules directory and will be available in all the test files. So, in a nutshell, this is the folder where NPM installs all the project dependencies. 

- ### Cypress.json is used to store different configurations. E.g., timeout, base URL, test files, or any other configuration that we want to override for tweaking the behavior of Cypress. We can also manage the customized folder structure because it is part of by default Cypress Configurations. 

## What are the basic Constructs of Cypress:

- ### describe(): It is is simply a way to group our tests. It takes two arguments, the first is the name of the test group, and the second is a callback function. 

- ### context(): It is is just an alias for describe().

- ### it(): We use it for an individual test case. It takes two arguments, a string explaining what the test should do, and a callback function which contains our actual test.

- ### before():  It runs once before all tests in the block.

- ### after(): It runs once after all tests in the block.

- ### beforeEach(): It runs before each test in the block.

- ### afterEach(): It runs after each test in the block.

- ### .only(): To run a specified suite or test, append “.only” to the function.

- ### .skip(): To skip a specified suite or test, append “.skip()” to the function.

## How to run all Cypress Tests using Cypress CLI?
- ###  ./node_modules/.bin/cypress run

## How to run a specific Cypress Test using Cypress CLI?
- ###  ./node_modules/.bin/cypress run --spec cypress/integration/examples/cypressTest1.js --browser chrome
### where “cypress/integration/e2e/test.js” is the path of the spec file which we want to run.

# Cypress Locators

# – The hash sign symbolizes the ID attribute. Additionally, it is mandatory to use the hash sign if we are using the ID attribute to create a CSS Selector - For Example, input#userid where “userid” is the id of the tag input.

# . – The dot sign is used to symbolize the Class attribute. Example: input.login where login is the class name of the tag input.


