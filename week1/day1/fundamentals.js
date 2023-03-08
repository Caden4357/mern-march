// * Review of data types 

// * String
let myName = "Caden";

// * Number 
let myAge = 25;

// * Still a Number in JS
let pi = 3.14;
let pie = 3.14

if(pi === '3.14'){
    console.log(true);
}else{
    console.log(false);
}


// * Boolean
let isHuman = true;

// * Null
let nothing = null;

// * Undefined
let nothing2;


// * Declaring an array. Notice the [] brackets, these are index based starting at 0
// * We typically use arrays to contain the same data types but they CAN be mixed. 
// * You will often see objects stored in arrays 
// *   indexes  0 1 2 3 4
let evenNums = [2,4,6,8,10];


let arrOfNames = ['Caden', 'Ben', 'Amy', 'Lindsey'];

// console.log(evenNums[1])

// * Declaring an object. Notice the {} 
// * Access values through key:value pairs! keys are on the left values on the right
let StudentMacy = {
    name:"Macy",
    role:"Student",
    age:25
}
// console.log(StudentMacy['name']);
// console.log(StudentMacy.name);

// * here we have an object with a little more going on showing that anything can be stored in an object you will see this in API's quite often 
let employeeAshton = 
{
    name: "Ashton",
    role:"Instructor",
    age:42,
    isHuman:true,
    favHobbies:['Learning new technologies', 'Playing with the dogs', 'Playing volleyball'],
    lectureSchedule:{
        week1:{
            day1:"HTML",
            day2:"CSS",
            day3:"Flex-box",
        },
        week2:{
            day1:"JS intro",
            day2:"JS on the browser",
            day3:"belt prep demo",
        },
        week3:{
            day1:"Terminal, JS arrays and objects",
            day2:"Github",
            day3:"API's",
        },
    }
}
console.log(employeeAshton.lectureSchedule.week1.day1);
console.log(employeeAshton.favHobbies[1]);

// * if, else if and else syntax 
if(myAge >= 18){
    console.log('You are old enough welcome in to the club');
}
else{
    console.log('Sorry you must be 18 or older to enter the club');
}

const highSchoolGrad = true;

if (highSchoolGrad){
    console.log('You can enroll in this bootcamp');
}
else{
    console.log('Sorry you must graduate high school or receive your GED first');
}

let weekday = "Friday"

if (weekday == "friday"){
    console.log("Woohoo its the weekend!");
}else if(weekday == "Saturday"){
    console.log("One more day to relax!");
}else{
    console.log("Time to work!");
}

// * for loop syntax 
for (let i = 0; i <= 10; i++){
    console.log(i)
}

// * looping through an array 
for (let index = 0; index < evenNums.length; index++) {
    console.log(evenNums[index]); 
}

// * function syntax

function sayHi() {  
    console.log("Hello World!");
}


function multiply(num1, num2){
    // ! explain to me the difference between return and console.log
    return num1 * num2
}
let multiplyResult = multiply(2,4);
console.log(multiplyResult);


// * writing functions with ES6 Arrow syntax just a new way to write functions
const sayHiArrow = () => {
    console.log('hi');
}

const multiplyArrow = (num1, num2) => {
    return num1 * num2
}

