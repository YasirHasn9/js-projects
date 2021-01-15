// create a function that represents the colors of 3 buttons
// change the color of the background button if its clicked


// 1. use a function called change color 
// 2. use a closure


// imagine we have 3 buttons in the dom
// blue , red , green: once we click any of them, we will change the background of the body


function changeBK(id, color){
    let btn = document.querySelector(`#${id}`)
    // btn id = document.getElementById(id)
    //  here we are gonna use the closure which enables us to 
    // reach for vars out of the its scope and lexical environment
    return btn.addEventListener("click" , () => {
            document.body.style.background = color
        })

}


changeBK("blue" , blue)
changeBK("red" , red)
changeBK("green" , green)