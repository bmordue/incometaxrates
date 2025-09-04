# Income Tax Scraper

This project is a web scraper that extracts income tax rates and allowances from the UK government website. It parses the HTML and saves the data into a structured JSON file named `data.json`.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the scraper and generate the `data.json` file, run the following command:

```bash
npm start
```

This will compile the TypeScript code and run the scraper. The output will be saved in the `data.json` file in the root of the project.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```