// console.log("Welcome to JS");
// console.log("I love JS");
// console.log("Smit");

// fullName="Smit Ankhiwala";
// console.log(fullName);

// age=24;
// console.log(age);

// price=99.99
// console.log(price);

// x=null;
// console.log(x);

// y=undefined;
// console.log(y);

// isFollow=false;
// console.log(isFollow);

// isFollow=true;
// console.log(isFollow);

let fullName="Smit";
console.log(fullName);

let totalPrice=1000;
console.log(totalPrice);

// var keyword is not recommended to use instead use let or const keyword as they don't allow to re-declare the variables
// var: variables can be re-declared & updated
// var age=24;
// var age=59;
// var age=86;

// let: variables cannot be re-declared but can be updated
// let age=24;
// age=59;
// age=86;
// console.log(age);

// const: variable cannot be re-declared or updated
const PI=3.14;
console.log(PI);

// Whenver we are using const keyword we need to initialize the variable but using let keyword we don't need to initialize the variable
// const a;
// let a;
// a=10;
// console.log(a);

{
    let a=5;
    console.log(a);
}

{
    let a=10;
    console.log(a);
}

// object is collection of different variables
// object is represented by key:value pairs
const student={
    fullName: "Smit",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
student["age"]=student["age"]+1;
student.fullName="Smit Ankhiwala";
console.log(student["age"]);
console.log(student.cgpa);
console.log(student.fullName);
console.log(typeof student.isPass);

// We can't the value of const variables but we can change the key value of const object



