const data = [
    {name:'Caden', email:'cwilcox@codingdojo.com', password:'12345678'},
    {name:'Brendan', email:'bcordova@codingdojo.com', password:'noOneWillGuessThis'},
    {name:'Amy', email:'amy@aol.com', password:'password'}
]
// ! Separating our data and functions 
const sayHi = (user) => {
    console.log(`${user.name} says hi!`);
}
// ! in functional programming we want to avoid manipulating data directly instead we make copies of the data and manipulate that 
const addUser = (allUsers,userToBeAdded) => {
    // allUsers.push(userToBeAdded)
    const updatedUserList = [...allUsers, userToBeAdded]
    return updatedUserList
}

// ! adding a new user 
const updatedUserList = addUser(data, {name:'Bob', email:'bob@aol.com', password:'password'})

// ! the 2 console.logs below show that we did not change the original data 
console.log('updatedUserList', updatedUserList);

console.log('DATA', data);










// ! Transparent functions means that every time a function is called with the same inputs it should return the same results 
const addNums = (num1, num2) => {
    return num1 + num2
}
console.log(addNums(2,6));
console.log(addNums(2,6));
console.log(addNums(2,6));
console.log(addNums(2,6));
console.log(addNums(2,6));
