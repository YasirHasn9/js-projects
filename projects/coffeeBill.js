// write a function that calculate the sum of the all the coffees that your 
// friends ordered ?
// the function takes an array of the number and each number represents its the count 
// that been ordered by one friend


function coffeeBill(arr){
    let total = arr.reduce((acc , cur) =>{
        console.log("this is acc" , acc)
        return acc + (cur  * 1.25)
    } , 0)

    return `The total bill is $${total}`
}

console.log(coffeeBill([2,5,7,1,4]))