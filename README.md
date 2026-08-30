# Student Services Portal

## Project Title
University Student Services Portal - TypeScript, GitHub, and AI-Assisted Development Workflow

## Project Description
A University Student Services Portal application built with TypeScript, featuring professional development workflow practices including Git source control, GitHub collaboration, linting, formatting, feature branches, Pull Requests, and responsible use of an AI coding assistant.

This project was established as part of a laboratory activity to set up a professional TypeScript development environment that the development team can use for succeeding features.

## Requirements
- Git
- GitHub account
- Visual Studio Code or another approved editor
- Node.js
- npm or pnpm
- TypeScript
- ESLint
- Prettier
- Web browser
- Instructor-approved AI coding assistant (if available)

## Installation Instructions

1. **Clone the repository:**
   ```bash
   git clone yaji.github.com:YajiHub/student_services_portal.git
   cd student-services-portal
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   # or using pnpm:
   pnpm install
   ```

3. **Install TypeScript globally (if not already):**
   ```bash
   npm install -g typescript
   ```

4. **Install ESLint and Prettier:**
   ```bash
   npm install --save-dev eslint prettier
   ```

## How to Run the Project

### Compile TypeScript
```bash
npx tsc
# or using npm script:
npm run build
```

### Run the Application
```bash
node dist/index.js
# or using npm script:
npm start
```

### Development Mode (watch mode)
```bash
npx tsc --watch
```

## How to Run Linting

```bash
npm run lint
```

This command runs ESLint on all TypeScript files:
```bash
eslint . --ext .ts
```

**Expected output:** No errors for properly formatted code. Any linting issues will be reported with file path, line number, and error description.

## How to Format Code

```bash
npm run format
```

This command formats all files using Prettier:
```bash
prettier --write .
```

**Expected output:** All TypeScript and markdown files will be reformatted according to the Prettier configuration (single quotes, 2-space indentation, 100-character line width).

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Write TypeScript code following the project's `src/index.ts` structure
- Use the `Student` interface and `formatStudent` function as needed
- Ensure all code passes ESLint: `npm run lint`
- Format code with Prettier: `npm run format`

### 3. Commit Your Changes
```bash
git add .
git commit -m "feat: describe your change"
```

### 4. Push to GitHub
```bash
git push origin feature/your-feature-name
```

### 5. Open a Pull Request
- Go to the GitHub repository
- Click "Compare & pull request"
- Fill in the PR template
- Tag reviewers and assign reviewers

### 6. Code Review & Merge
- Respond to reviewer comments
- Make necessary modifications
- Once approved, merge the Pull Request
- Delete the feature branch

## AI Usage Policy

**AI tools may be used to assist development.** All AI-generated code must be:

1. **Reviewed** - Carefully examine all code suggested by AI tools
2. **Modified when necessary** - Adapt the code to fit project requirements and coding standards
3. **Tested** - Verify the code works as expected (run `npm test`, compile with `npx tsc`)
4. **Verified before commit** - Ensure the code is correct and follows the project's patterns before committing

**Do not commit AI-generated code without:**
- Understanding what the code does
- Ensuring it doesn't introduce security vulnerabilities
- Confirming it adheres to the TypeScript interfaces and project conventions
- Running linting and formatting checks

The use of AI coding assistants is encouraged for productivity, but human review and quality assurance remain the responsibility of the developer.

---

## Repository Structure

```
student-services-portal/
├── package.json          ← Node.js project configuration
├── tsconfig.json         ← TypeScript configuration
├── .gitignore            ← Git ignore patterns
├── eslint.config.json    ← ESLint configuration
├── .prettierrc           ← Prettier configuration
├── src/
│   └── index.ts          ← TypeScript source code (Student interface + formatStudent)
├── dist/                 ← Compiled JavaScript output
├── node_modules/         ← npm dependencies (excluded from git)
└── README.md            ← This file
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run tests (currently: "Error: no test specified" && exit 1) |
| `npm run lint` | Run ESLint on all .ts files |
| `npm run format` | Format all files with Prettier |
| `npm run build` | Compile TypeScript to JavaScript |

---

**Generated as part of laboratory activity: "Establishing a Professional TypeScript, GitHub, and AI-Assisted Development Workflow"**