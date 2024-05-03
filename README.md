Express JS With Node.js and TypeScript Starter
==========================

This project is a backend application written in TypeScript, designed to run on Node.js. It provides a simple setup for a backend server with development and build scripts.

Getting Started
---------------

To set up and run this project, you'll need Node.js and npm (Node Package Manager). Follow these steps to get started.

### Installation

1.  Clone the repository to your local environment.
2.  Open a terminal and navigate to the project directory.
3.  Run `npm install` to install the required dependencies.

To start a development server with automatic reloading, run:

bash

Copy code

`npm run start:dev`

This command uses `nodemon` to watch for changes in TypeScript files and restart the server automatically.

### Building

To compile the TypeScript code into JavaScript, run:

bash

Copy code

`npm run build`

This command clears the `build` directory (using `rimraf`) and then compiles the TypeScript files into JavaScript.

### Running the Built Application

To start the built version of the application, use:

bash

Copy code

`npm run start:build`

This will run the compiled JavaScript code in the `build` directory.

Dependencies and DevDependencies
--------------------------------

### Dependencies

-   cookie-parser: Middleware for parsing cookies in Express.
-   cors: Middleware for enabling Cross-Origin Resource Sharing.
-   express: Web application framework for Node.js.
-   jsonwebtoken: Library for generating and verifying JSON Web Tokens.

### DevDependencies

-   @types/cookie-parser: TypeScript type definitions for `cookie-parser`.
-   @types/cors: TypeScript type definitions for `cors`.
-   @types/express: TypeScript type definitions for `express`.
-   @types/jest: TypeScript type definitions for `jest`.
-   @types/node: TypeScript type definitions for `Node.js`.
-   @typescript-eslint/eslint-plugin: ESLint plugin for TypeScript.
-   @typescript-eslint/parser: ESLint parser for TypeScript.
-   eslint: Linter for code quality and style.
-   nodemon: Tool for automatically restarting the Node.js server when files change.
-   rimraf: Command-line utility for removing files and directories.
-   ts-node: TypeScript execution environment for Node.js.
-   typescript: TypeScript language and compiler.
