const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// ! make sure these lines are above any app.get and app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(faker.name.firstName());


const createUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number()
    }
}
app.get('/user', (req, res) => {
    const newUser = createUser();
    res.json(newUser)
})








app.listen( port, () => console.log(`Listening on port: ${port} woohoo!`) );