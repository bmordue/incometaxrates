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

## Task Management

This project uses **tssk** for task tracking and development workflow management.

### Key Commands

```bash
tssk list              # View all tasks by status
tssk show <id>         # View full task details
tssk add -t "Title"    # Create a new task
tssk status <id> <status>  # Update task status (todo, in-progress, done, blocked)
tssk deps add <id> <dep-id>  # Add task dependency
```

### Task Statuses

- `todo` - Ready to work on
- `in-progress` - Currently being worked on
- `done` - Completed
- `blocked` - Cannot proceed due to external factors

### Viewing Project Roadmap

To see the current development roadmap and task backlog:

```bash
tssk list
```

Tasks are organized by development phases with clear dependencies. Check individual task details with `tssk show <id>` for full descriptions and acceptance criteria.