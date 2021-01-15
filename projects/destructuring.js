

// first way 
function getStudents(classRoom){
    if(classRoom["hasTeachingAssistant"] === true){
        let [teacher,teachAssistant , ...students] = classRoom["classList"]
        return students
    } else {
        let [teacher, ...students] = classRoom["classList"]
        return students
    }
}

console.log(getStudents({
    hasTeachingAssistant: false,
    classList: ["teacher" , "Assistant Teacher" , "student1"  , "student2" , "student4" , "student5"]
}))

// no thing is dumb in the software development but the first way I always called the dumb way 
// which means we should be reflected back on it 

function updatedGetStudents(classRoom){
    let {hasTeachingAssistant, classList} = classRoom
    let teacher, teacherAssistant , students
    if(hasTeachingAssistant){
        [teacher, teacherAssistant , ...students] = classList
    } else {
        [teacher , ...students] = classList
    }
    return students
}

console.log(updatedGetStudents({
    hasTeachingAssistant: false,
    classList: ["teacher" , "Assistant Teacher" , "student1"  , "student2" , "student4" , "student5"]
}))
console.log(updatedGetStudents({
    hasTeachingAssistant: true,
    classList: ["teacher" , "Assistant Teacher" , "student1"  , "student2" , "student4" , "student5"]
}))