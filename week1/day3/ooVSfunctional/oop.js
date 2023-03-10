// ! Data and functions are tied together in OOP 
class User{
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }
    sayHi(){
        console.log(`Hi my name is ${this.name}`);
    }
}
const caden = new User('caden', 'cwilcox@codingdojo.com', '12345678')
const brendan = new User('Brendan', 'bcordova@codingdojo.com', '12345678')
console.log(caden);
// caden.sayHi()
// brendan.sayHi()
