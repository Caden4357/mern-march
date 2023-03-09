// Global, function and block scope 

// ! The global scope is the scope that contains, and is visible in, all other scopes

let personOne = "Caden Wilcox";
// personOne = "some"

if(personOne === 'Caden Wilcox'){
    let personOne = 'Bob Ross'
    console.log('Inside if statement', personOne);
}

console.log(personOne);

// ! Function scope variables are only accessable inside the function they are declared in (a nested function would have access to variables declared in the parent function)
const sayHi = () => {
    var newName = 'Chris'
    console.log('Hi', newName);
}
sayHi()
// console.log('Hi', newName);

// ! Block scope a block is defined by a set of curly brackets

const logNums = (nums) => {
    for (var idx = 0; idx < nums.length; idx++) {
        // const element = nums[idx];
        console.log(`the num is ${nums[idx]} at index ${idx} `);
    }
    // console.log('final index', idx);
}
logNums([1,2,3,4])

// * const variables. means constant they cannot change BUT if you have an object or an array stored in a const variable you can manipulate the data inside
const newName = 'Todd'

const person = {
    name: "Robert Smith",
    age: 32,
    isMusician: true,
    favHobbies:['coding', 'guitar']
}
let {...personCopy} = person
personCopy.name="something new"
console.log(personCopy, person);
// * destructuring and rest/spread operator 

// * Destructuring: easily pull out values inside an array or object 
// * rest/spread operator: spread out values inside an array or object we can do this to make copies of the data and also manipulate it this will be a common thing we do in React
// const age = person.age
let {name:robert, ...restOfTheObject} = person
// let {name, age, isMusician} = person
console.log(robert);
console.log(robert, restOfTheObject);
const updatedPerson = {...person, age:33}
console.log(updatedPerson);


let evenNums = [2,4,6,8,10];
let [num1,num2,, ...everythingElse] = evenNums
console.log(everythingElse);


let names = ['Caden', 'Ben', 'Amy', 'Lindsey'];
let [,, amy] = names
console.log(amy);