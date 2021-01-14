// symbol are extremely useful for saving aor dealing with private 
// values 

let username = Symbol("username")
let password = Symbol("password")

let obj = {
    [username]:"John Doe",
    [password]:12345,
    name : "U"
}


// before using the [ ] around the property, we can log the values
// but now we cant because its a private by using the Symbol
// console.log(obj.username)
// console.log(obj.password)
// console.log(Object.keys(obj))


function tryIt(o){
    o[Symbol["private"]] = 42
}

let n = {prop : " je;"}
tryIt(n)
console.log(n[Reflect.ownKeys(n)])