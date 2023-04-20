class Human{
    constructor(name, hairColor){
        this.name = name
        this.hairColor = hairColor
    }

    sayHi(){
        console.log(`Hi my name is ${this.name}`);
    }
}
const caden = new Human('Caden', 'Brown');
const brendan = new Human('Brendan', 'Red');
caden.sayHi();
brendan.sayHi();

class Student extends Human{
    constructor(name, hairColor, currentStack){
        super(name, hairColor)
        this.currentStack = currentStack
    }
    // ? methods for student would go here
}
const Anthony = new Student('Anthony', 'Blonde', 'MERN')
Anthony.sayHi()

