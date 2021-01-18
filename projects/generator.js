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

getRandom("r",names , genNames)