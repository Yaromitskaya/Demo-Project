# Demo-Project
Cypress quickstart project for test automation, covering UI ans API testing.
This repository contains Cypress tests for the [NERO](https://alpha.unic-lab.by/) application.
Provide all commonly required components and concepts.

## Concepts Included

* Page Object pattern
* Dependency injection
* Common web page interaction methods
* Common api interaction methods
* Externalised test configuration

## Tools

* Cypress
* Jenkins

## Running Tests

The following steps should get you set up for running Cypress tests locally on your machine:

1. Clone this repository to your local machine.
2. Open tests in your IDE.
3. Install dependencies.
`npm install`

## Reporting

To run all tests supplemented with reports, run:

`npx cypress run --reporter mochawesome`

Reports in HTML format are written into `cypress/reports` directory after a successful run.

