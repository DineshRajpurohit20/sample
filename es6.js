//es6 features
//let 
let studentcount = 10;
console.log("Student count: ",studentcount);

//const
const collegeName = "ABC College";
console.log("College Name: ", collegeName);

//template literals
let name = "Dinesh";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);

//object
const student = {
    name: "Dinesh",
    age: 20,
    college: "ABC College"
};
console.log("Student Object: ", student);

//destructuring
const { name: studentName, age: studentAge, college: studentCollege } = student;
console.log("Name: ", studentName);
console.log("Age: ", studentAge);
console.log("College: ", studentCollege);
 
//arrow function
const displayStudentInfo = (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayStudentInfo("Dinesh", 20);                   

//array
const students = ["Dinesh", "Ramesh", "Suresh"];
console.log("Students Array: ", students);

//spread operator
const newStudents = [...students, "Mahesh"];
console.log("New Students Array: ", newStudents);

//rest operator
function maximumMarks(...marks) {
    let max = Math.max(...marks);
    return max;
}
console.log("Maximum Marks: ", maximumMarks(85, 90, 78, 92));

