import express from 'express';
import cors from 'cors'; 
import cookieParser from 'cookie-parser'

/*

To start the app, run "npm run start:dev". Check the scripts in the package.json file.


Simple Express JS (With Node.JS) Backend Application with TypeScript Setup.
Very Minimal. No file structure. Basic to understand.

Contains all the NPM packages needed for a very basic app.
For Database connections, you might want to look into ORMs (Object Relational Mappers).
I can recommend Mongoose for NoSQL (MongoDB) and Drizzle-ORM for SQL (Mainly PostgreSQL).

*/

const app = express();
const PORT:number = 3000;

//Recommended Middleware for beginners
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Hello World!");
});



//Example 
app.get("/api/users", async (request, response) => {

});

app.listen(PORT, () => {
console.log(`Backend Server running on: http://localhost:${PORT}/`)
});

