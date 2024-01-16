//destructuring

const course = {
    corseName : "javaScript",
    price : 999,
    courseInstructor : "Hitesh"
}
//course.courseInstructor
const {courseInstructor : teacher } = course;
//console.log(courseInstructor);
console.log(teacher);

// API Json

// {
//     "name" : "Sani",
//     "courseName" : "js",
//     "courseFee" : "Free"
// }

//or

// [
//     {},
//     {},
//     {}
// ]