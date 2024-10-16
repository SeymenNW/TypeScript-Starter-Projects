# TypeScript Starter Project.

TypeScript Project. Clean. Works.

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
---------------

To start the built version of the application, use:

bash

Copy code

`npm run start:build`

This will run the compiled JavaScript code in the `build` directory.


