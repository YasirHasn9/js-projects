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
const HangerGames = new BookInfo("Hunger Games" , "Nanccy Collisin" , 1234, 5)
console.log(HangerGames.getAvailability())
HangerGames.restock(12)
console.log(HangerGames.getAvailability())
HangerGames.sell(17)
console.log(HangerGames.getAvailability())