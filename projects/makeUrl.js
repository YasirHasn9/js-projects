// write a function that take one argument as a title blogs and return 
// url

 // Take the string, strip it for spaces 
// spot the punctuations, symbols and replace them with -
// convert it to lowercase letters


function makeUrl(blog){
    let punctuations = /[.,/#!$%^&*();:{}=!\-_`~'"]/g

    let titleWithNoPunctuation = blog.replace(punctuations , "")

    return titleWithNoPunctuation.toLowerCase().trim().replaceAll(" " ,"-")

}

console.log(makeUrl("Hello world"))
