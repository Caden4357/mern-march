// ? Create a function that takes in a string input, search through each letter in the string input to find “h”, “e”, “l” and “p” which spells out help in that order. Return True if found and false if not.
// ex: “The last person was Ironman” --> True
// ex: “How about them pelicans” --> False

const helpFinder = (str) => {
    // * Your code goes here 
}
const result = helpFinder('The last person was Ironman'); // should return true
const result2 = helpFinder('How about them pelicans'); // should return false 






// ? Given two arrays, create a function that lets a user know (true/false) whether these two arrays contains any common items:
// inputs: array1, array2
// outputs: true/false
// Case 1: returns True
// const array1 = ['a', 'b', 'c', 'd', 'e', 'z'] //<=inputs
// const array2 = ['z', 'y', 'x'] //<=inputs
// Case 2: returns False
// const array1 = ['f', 'e', 'd'] //<=inputs
// const array2 = ['n', 'm', 'o'] //<=inputs

const commonItems = (arr1,arr2) => {
    // * Your code goes here
}
const isCommon = commonItems(['a', 'b', 'c', 'd', 'e', 'z'], ['z', 'y', 'x']); // should return true
const isCommon2 = commonItems(['f', 'e', 'd'], ['n', 'm', 'o']) // should return false 


// ? Given a string, return true if the string is a palindrome, and false otherwise.
// * Palindrome means the word is the same read backwards example mom, dad, racecar, kayak are all palindrome but racecars, fast, hug are examples that are not palindrome

const palindrome = (str) => {
    // * Your code goes here
}
const isPalindrome = palindrome('kayak'); // should return true
const isPalindrome2 = palindrome('racecars'); // should return false 
