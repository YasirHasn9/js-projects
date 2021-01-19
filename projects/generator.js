
// generator in js are function can be exited on later point in time and reentered while 
// maintaining their context. They are very useful to solve asynchronous problems. At the moment
// I believe they are been replaced with async/await.
// we make generators function by using function keyword + * ==> function*

// if we call the function, it would give us nothing because it does not execute 
// the body function, instead we get an iterator object
function* example(){
    yield 9
    yield 10
}
console.log(example()) // this will return an object
// to get the 8 value , we need to use the next() function
//  we need to called with the next function 
let gen = example()
console.log(gen.next()) // {value:9,done:false}
console.log(gen.next()) // {value:10,done:false}
console.log(gen.next())// { value: undefined, done: true } which means it hits the last value
// with 2 key/property
// {value: 8, done: false}
function* genNames(arr){
    while(arr.length !== 0){
        let randomIn = Math.floor(Math.random() * arr.length)

        let name = arr[randomIn]

        arr.splice(randomIn , 1)

        yield name
    }
}

let names = ["Dom" , "Jon" , "Doe" , "Nabeel"]

function getRandom(arr , fn){
    for(let name of fn(arr)){
        console.log(name)
    }
}

// getRandom(names , genNames)



