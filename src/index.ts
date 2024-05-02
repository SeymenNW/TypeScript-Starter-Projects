import express from 'express';

/*
This project aims to be a simple starter code for Node.js, TypeScript and Express applications.
No Application structure is defined (That's a bit of personal choice and likings).

As of right now it is EXTREMELY Minimal. Plan is to add different versions and this one will be as is. 

*/

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    response.send("Yo what's good?");
})

app.listen("3000", () => {
console.log(`Backend running on PORT: ${PORT}`)
});

