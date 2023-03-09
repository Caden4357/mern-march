// * You will be given an array and a value. you need to check whether the provided array contains the value.
// * Array can contain numbers or strings. X can be either.
// * Return true if the array contains the value, false if not.
// 1.) write a function that takes in 2 params (arr, x)
// 2.) write a for loop to go from idx 0 to the end of the array (.length)
// 3.) if statement to compare x to the arr at the idx position 
    // if true return true 
    // if not return false 
    // input: arr: [1,2,3,4,5], x:3 -> return true 
    // input: arr: [1,2,3,4,5], x:6 -> return false 
const checkArr = (arr, x) => {
    for (let idx = 0; idx < arr.length; idx++) {
        console.log(arr[idx]);
        if(arr[idx] === x){
            return true 
        }
    }
    return false
}
console.log(checkArr([1,2,3,4,5], 3));
console.log(checkArr([1,2,3,4,5], 6));

const checkArrBuiltin = (arr, x) => {
    return arr.includes(x)
}
console.log(checkArrBuiltin([1,2,3,4,5], 6));



// * Given an array of 'weak passwords' and a password (string) determine if the password is strong or weak 
// * if the password is in the list of weak passwords return 'Weak password'
// * if the password is not found in the list of weak passwords return 'Strong password'


// * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.