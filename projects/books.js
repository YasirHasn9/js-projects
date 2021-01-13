
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
console.log(typeof User)

































class BookInfo{
    constructor(book , author , ISBN , numCopies){
        this.book = book 
        this.author = author;
        this.ISBN = ISBN
        this.numCopies = numCopies
    }

    get length(){
        return this.numCopies
    }
    getAvailability = () => {
        if(this.length === 0){
            return "Out of the stocks"
        }
        if(this.length <10){
            return "low Stock"
        }

        return "In stocks"
    }

    sell = (numOfBook) => {
        this.numCopies -= numOfBook
    }

    restock = (numOfBook = 5) => {
        this.numCopies += numOfBook
    }
}






// every thing you can do with function you can do with class as well
// this function
function BookFun(title , author, ISBN , numCopies){
    this.title = title
    this.author = author
    this.ISBN = ISBN
    this.numCopies = numCopies
}


// why would we declare a function on the prototype ? 
// because we don't wanna create a new instance of this function each time we create a class
BookFun.prototype.getAvailability = function (){
    if(this.numCopies === 0){
        return "Out of Stocks"
    }
    if(this.numCopies < 10){
        return "Low stocks"
    }
    return "In Stocks"
}


BookFun.prototype.sell = function (soldCopies = 1){
     this.numCopies -= soldCopies
}

BookFun.prototype.restock = function(addCopies = 5){
     this.numCopies += addCopies
}

// const HangerGames = new BookFun("Hunger Games" , "Nanccy Collisin" , 1234, 5)
// const HangerGames = new BookInfo("Hunger Games" , "Nanccy Collisin" , 1234, 5)
// console.log(HangerGames.getAvailability())
// HangerGames.restock(12)
// console.log(HangerGames.getAvailability())
// HangerGames.sell(17)
// console.log(HangerGames.getAvailability())


class TechnicalBook extends BookInfo{
    constructor(edition){
        super()
        this.edition = edition
    }

    getEdition = () => {
        return `
        Edit is ${this.edition}
        Title is ${this.title}
        Director is ${this.author}
        ISBN is ${this.ISBN}
        Copies is ${this.numCopies}
        `
    }
}

let technical = new TechnicalBook("Edit" , "Title" , "Author",1291 , 33)

console.log(technical.getEdition())