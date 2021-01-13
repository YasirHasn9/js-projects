

const dishes = [
    {
        name: "Eggplant Persmaen ",
        vegetarian:true
    }, 
    {
        name:"Spaggutie and meatball",
        vegetarian:false
    }
]

let vegetables = dishes.filter(dish => dish.vegetarian)
console.log(vegetables)