const express = require("express"); // this means import express 
const app = express();
const port = 8000;


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// ! List of instructions
app.get("/api", (request, response) => {
    response.json({ message: "Welcome to the bank of Caden" });
});

app.post("/api/postData", (request, response) => {
    console.log(request.body);
    response.json({requestBody: request.body})
})












// ! this needs to be below the other code blocks
// console.log("Hi changed");
app.listen( port, () => console.log(`Listening on port: ${port}`) );

