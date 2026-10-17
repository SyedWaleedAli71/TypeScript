// let studentName: string = "Ali";
// let age: number = 22;
// let isStudent: boolean = true;

// console.log(studentName);
// console.log(age);
// console.log(isStudent);

// String Array
// let students: string[] = ["Ali", "Anas", "Moiz"];

// students.push("abeer");

// console.log(students);
// console.log(students[0]);
// console.log(students.length);

// Functios 
// let name: string = "Ali";
// let age: number = 22;
// let ss: boolean = true;
// let obj: {
//     name: string ,
//     age: number,
//     ss: boolean,
// }
// let obj = {
//     name: "Waleed Ali",
//     age: 22,
//     ss: true,
// };

// console.log(obj);
// 
// let obj: {
//     name: string;
//     age: number;
//     ss: boolean;
// } = {
//     name: "Waleed Ali",
//     age: 22,
//     ss: true,
// };

// console.log(obj);
// 
// interface User {
//     id: number;
//     name: string;
//     email?: string;
//     age: number;
// }
// const u: User = { id: 1, name: "Ali", age: 22 };
// const u2: User = { id: 2, name: "Anas", email: "anas@example.com", age: 24 };
// 

// interface User {
//     id: number;
//     name: string;
//     email?: string;
//     age: number;
// }

// // First user
// const u: User = {
//     id: 1,
//     name: "Ali",
//     email: "anas@example.com",
//     age: 22
// };

// // Second user
// const u2: User = {
//     id: 2,
//     name: "Anas",
//     email: "anas@example.com",
//     age: 24
// };

// // Print complete objects
// console.log(u);
// console.log(u2);

// // Access individual properties
// console.log("User Name:", u.name);
// console.log("User Age:", u.age);
// console.log("User Email:", u.email);

// console.log("Second User Name:", u2.name);
// console.log("Second User Email:", u2.email);

// // Function using Interface
// function displayUser(user: User): void {
//     console.log("ID:", user.id);
//     console.log("Name:", user.name);
//     console.log("Email:", user.email ?? "Email not provided");
//     console.log("Age:", user.age);
// }

// displayUser(u);
// displayUser(u2);
// 

// let id: string | number = 22;
// id = 101;
// id = "A101";