"use strict"

//1
// const searchString = (a, b) => console.log(a.toLowerCase().includes(b));

// searchString('originalStr', 'str')


//2
// const capitalizeFirstLetter = (a) => {
//     let result = a[0].toUpperCase() + a.slice(1);
//     return result;
// }

// console.log(capitalizeFirstLetter("hELLO"));


//3
// const truncate = (str, maxlength) => {
//     if (maxlength < str.length) {
//         let truncatedString = str.substr(0, maxlength) + ('...');
//         return truncatedString;
//     } else {
//         return str;
//     }
// }

// console.log(truncate("Hello world", 5));
// console.log(truncate("Hello world", 11));


//4
// const students = [
//     {
//         name: 'John Smith',
//         marks: [10, 8, 6, 9, 8, 7]
//     },
//     {
//         name: 'John Doe',
//         marks: [9, 8, 7, 6, 7]
//     },
//     {
//         name: 'Thomas Anderson',
//         marks: [6, 7, 10, 8]
//     },
//     {
//         name: 'Jean-Baptiste Emanuel Zorg',
//         marks: [10, 9, 8, 9]
//     }
// ]


// const newStudents = () => students.map((student) => {
//     const newStudent = Object.assign({}, student);
//     newStudent.averageMark = newStudent.marks.reduce((sum, mark) => sum + mark, 0) / newStudent.marks.length;
//     return newStudent;
// });

// console.log(newStudents());


// const result = () => newStudents().reduce((sum, student) => sum + student.averageMark, 0) / newStudents().length;

// console.log(result())



//5
// const vehicles = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//     { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//     { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//     { make: 'Toyota', model: 'Sequoia', type: 'SUV', price: 45560 },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//     { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//     { make: 'Ford', model: 'Explorer', type: 'SUV', price: 31660 }
// ];


// let necessaryType = vehicles.filter(item => item.type == "suv" || item.type == "SUV" );
// let result = necessaryType.reduce((sum, current) => sum + current.price, 0) / necessaryType.length;

// console.log(result)



//6
// let arr = [10, 20, 3, 4, 0, 99, 97];

// const copySorted = () => arr.slice().sort((a, b) => a - b);
// let sorted = copySorted(arr);

// console.log(arr);
// console.log(sorted);



//7
// let ourObj = {};

// function getKeysCount(ourObj) {
//     return Object.keys(ourObj).length;
// }

// или

// const getKeysCount = (ourObj) => Object.keys(ourObj).length;

// console.log(getKeysCount({ name: 'John' }));
// console.log(getKeysCount({ name: 'John', age: 22 }));
// console.log(getKeysCount({ name: 'John', salary: null }));