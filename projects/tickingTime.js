// display on the dom a ticking clock


// 1. we create a function 
// 2. we target the node in the dom
// 3. we use a built-in function called setInterval 
// 4. call the SetInterval function on 1000 == second


// method one with no update clock
function clock(){
    let node = document.getElementById("#ticking")
    let timer = new Date()
    let hours = timer.getHours()
    let mins = timer.getMinutes()
    let secs = timer.getSeconds()
    let time = `${hours}:${mins}:${secs}`

    node.textContent = time
}
// method two with updated clock on every second
function ticking(){
    // imagine the name of the node is called ticking 
    let node = document.getElementById("#ticking")
    return setInterval(() => {
        let timer = new Date()
        let date = timer.toLocaleString()

        node.textContent = date
    } , 1000)
}

// destructuring