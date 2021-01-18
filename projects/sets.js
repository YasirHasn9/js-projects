// sets are a primitive js type that allows for us to remove a duplicate values and create 
//  a unique values 




// imagine you 3 trucks of food. each truck has its own menu. These menus may have duplicate values 
// write a function that combined these menus and return one array of uniques values

// example 
let truck1 = ["Falafl" , "Pizza" ]
let truck2 = ["Pizza" , "Meat Ball"]
let truck3 = [ "Shawrma " , "Kabab" , "Pizza"]
//  the return values should be ["Falafl" , "Pizza " , "Meat Ball" ,"Shawrma " , "Kabab"]

// use Set

function totalMenu(...args){
    let arr = []
    for(let i = 0 ; i < args.length ; i++){
        arr.push(...args[i])
    }
    console.log("arr",arr)
    return [...new Set(arr)]
}

console.log(totalMenu(truck1, truck2 ,  truck3))

