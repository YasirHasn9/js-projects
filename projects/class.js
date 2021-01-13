
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
// console.log(typeof User) // function

/*
what class User really does ?
1. create a function named User. 
        This function is result form the class declaration
        The function code is taken from the constrictor method

2. built the sayHi method on the User.prototype
*/
// proof
// console.log(User === User.prototype.constructor)
// console.log(User.prototype.sayHi)



// Function

// 1. create a constructor
function UserFun(name){
    this.name = name
}

// 2. create method on the prototype of the User
UserFun.prototype.sayHi = function() { console.log(`Hello ${this.name}`)}



// class inheritance
// It is a way for one class to extend from another class so we can create new functionality 
// on the top of the exiting

// Example 
class Animal{
    constructor(name){
        this.name = name
        this.speed = 0
    }

    run(speed){
        this.speed = speed
        console.log(`${this.name} runs with speed ${this.speed}`)

    }

    stop(){
        this.speed = 0
        console.log(`${this.name} still stands`)
    }
}


// let tiger = new Animal("Namero")
// tiger.run(60)
// tiger.stop()

// now we need to create a new class that extends the functionality form the Animal class
/*
syntax
class Child extend Parent{}
Now, because of the inheritance the object of Child has access to both Child and Parent methods.
Internally, extends uses the mechanics of prototype. so, if we want to find a method not exists on Child 
Js will look if its in the prototype of the Parent
Child.prototype.[[prototype]] == Parent.prototype


        prototype       Parent.prototype
Parent ------------>      constrictor
                           method1
                           method2



                        [[prototype]]
                            ^
                            |
                            |
         prototype     Child.prototype
Child  ------------->    constructor
                          method1
                          method2
                            ^
                            |
                            |

                         [[prototype]]
                            ^
                            |
                            |
                      new Child()
 */

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} hides`)
    }
}
let rabbit = new Rabbit("White Rabbit")
rabbit.run(10)
rabbit.hide()




























