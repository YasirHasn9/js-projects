
/*
In OOP , class is an extensible template to create objects. And also provides values and implementation 
behavior.

syntax 
class MyClass {
    constructor(){...}
    methods1
    methods2
}
to use it 
let myClass = new MyClass()
when using the new keyword
1.new object is created 
2.constructor runs with given argument
*/

class User{
    constructor(name){
        this.name = name
    }

    sayHi(){
        console.log(`Hello ${this.name}`)
    }
}
// class is kinda of a function 
// proof
console.log(typeof User) // function

/*
what class User really does ?
1. create a function named User. 
        This function is result form the class declaration
        The function code is taken from the constrictor method

2. built the sayHi method on the User.prototype
*/
// proof
console.log(User === User.prototype.constructor)
console.log(User.prototype.sayHi)



// Function

// 1. create a constructor
function UserFun(name){
    this.name = name
}

// 2. create method on the prototype of the User
UserFun.prototype.sayHi = function() { console.log(`Hello ${this.name}`)}

































