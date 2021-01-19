

function numOfWords(letters){
    let total = 1
    for(let i = 1; i <= letters.length ; i++){
        total *= i
    }
    return total
}

console.log(numOfWords("hello"))


function stringPermutation(string) {
    if (string.length === 1) {
      return 1;
    }
    return string.length * stringPermutation(string.slice(1));
  }
  console.log(stringPermutation("hello"));