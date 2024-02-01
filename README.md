## Install

```Shell
npm init
npm install @playwright/test 
```

This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.ts. You can now jump directly to writing assertions section.

## Manually

Add dependency and install browsers.

```Shell
npx playwright install
```
#Usage

## Running tests

```Shell
npm run tests:multipleBrowsers
npm run tests:visualRegression
```

## Structure
This project consists of the following structure:

/tests: Directory includes tests files (*.spec.ts).
/pages: Contains classes for each page of the website under test.
/enums: Contains helpful enumeration definitions.
/constants: Includes constant values that are used throughout the project.
/fixtures: Directory includes setup and cleanup files for your tests.
/utils: Directory includes utility files that can hold helper functions.
playwright.config.ts : This is the configuration file for playwright.

## Best Practices
This project strictly adheres to the best practices recommended by Playwright including:

* Page Object Model: Instead of writing automation tests that manipulate webpage elements directly, we define an intermediary Page Object to represent each page of your website. This encapsulates the details of the page layout and element locators away from your actual tests.
* Use of Fixtures: Tests use the fixture setup to reuse code and avoid redundancy. This also ensures each test is independent and runs in isolation.
* Use of Async/Await: As Playwright operations are asynchronous, correct usage of async/await has been followed in this project to ensure reliability and readability in scripts.
* Use of Enums and Constants: Enums and constants are used to share and reuse data across tests to prevent hardcoding.
Locator Strategy
* This project uses the powerful locator strategy of Playwright, focusing on the use of robust and efficient selectors to interact with web elements. The goal is to minimize the brittleness of our tests and make them more reliable, even when the UI changes.

## Built With
Playwright - Plays how humans do Playwright is a Node.js library to automate Chromium, Firefox and WebKit browsers with a single API.

## Contact
If you have any questions, feel free to contact us.
https://github.com/VukasinGrebic