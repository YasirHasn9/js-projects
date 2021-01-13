// Js uses object to construct inheritance and each object has private property which links to another object called the prototype.
// and also the object of the prototype has prototype of its own until it has reached null 

// create a movie object 
function MovieFun(title , director, genre , releaseYear , rating){
this.title = title 
    this.director = director
    this.genre = genre 
    this.releaseYear = releaseYear
    this.rating = rating
}

// we are gonna create function on the prototype of the MovieFun object 
// because we dont wanna create a new instance of function each time will call the object

MovieFun.prototype.getOverview = function(){
    return `
            Title is ${this.title}
            Director is ${this.director}
            Genre is ${this.genre}
            Release Year is ${this.releaseYear}
            Rating is ${this.rating}
            `
}

let movie = new MovieFun("God of Father" , "Yasir Hassan" , "Classic" , 1972 , "5 star")

console.log(movie.getOverview())



class MovieCla{
    constructor(title , director, genre , releaseYear , rating){
        this.title = title
        this.director = director
        this.genre = genre
        this.releaseYear = releaseYear
        this.rating = rating
    }

    getOverview = () => {
        return `
        Title is ${this.title}
        Director is ${this.director}
        Genre is ${this.genre}
        Release Year is ${this.releaseYear}
        Rating is ${this.rating}

        `
    }
}
let movieC = new MovieCla("God of Father" , "Yasir Hassan" , "Classic" , 1972 , "5 star")
console.log(movieC.getOverview())