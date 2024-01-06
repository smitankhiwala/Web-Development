// for loop
let s=0;
for(let i=1;i<=5;i++) {
    s=s+i;
}
console.log("Sum= ",s);

// while loop
let j=1;
while(j<=5) {
    console.log("j=",j);
    j++;
}

// do-while loop
let k=1;
do {
    console.log("k=",k);
    k++;
}while(k<=5);

// for-of loop
// for-of loop is used in strings and arrays
let str="SmitAnkhiwala";
let length=0;
for(let a of str) {
    console.log("a=",a);
    length++;
}
console.log("string length= ",length);

// for-in loop
// for-in loop is used in objects and arrays
let student= {
    name: "Smit Ankhiwala",
    age: 20,
    cgpa: 7.5,
    isPass: true
}
for(let key in student) {
    console.log("keys=",key," value=",student[key]);
}

// practice question
let gameNum=28;
let userNum=prompt("Guess the game number: ");

while(userNum!=gameNum) {
    userNum=prompt("You entered wrong number. Guess again: ");
}

console.log("Congratulations, you entered the right number");

// Strings
str="SmitAnkhiwala";
console.log(str.length);
console.log(str[4]);

// Template literals
// Template literals are basically strings only but created using ` ` and we can embed expressions in it
let specialString=`This is a template literal ${1+2+3}`;
console.log(specialString);
console.log(typeof specialString);

let obj={
    item: "pen",
    price: 10,
}

console.log("the cost of",obj.item,"is",obj.price,"rupees");

let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// Escape character
console.log("Smit\nAnkhiwala"); // next line
console.log("Smit\tAnkhiwala"); // tab space
str="Smit\nAnkhiwala";
console.log(str.length); //length of escape character is counted as 1

// String Methods
// String Methods returns new string. It does not change the value of original string
// Strings are immutable
str="SmitAnkhiwala";
let newStr=str.toUpperCase();
console.log(newStr);

str=str.toUpperCase();
console.log(str);

str=str.toLowerCase();
console.log(str);

// trim functions removes whitespaces from the beginning and ending of the string
str="       Smit Ankhiwala         ";
console.log(str.trim());

str="01234567";
console.log(str.slice(1,6));
str="hello";
console.log(str.slice(2));

let str1="smit";
let str2="ankhiwala";
let res;

res=str1.concat(str2);
console.log(res);

res="I am learning coding from "+str1+str2;
console.log(res);

res="hello"+123;
console.log(res);

str="hellololo";
console.log(str.replace("lo","p")); // replaces only the first matching value
console.log(str.replaceAll("lo","p")); // replaces all the matching values

str="ILoveJS";
console.log(str.charAt(3));

str=str.replace("I","S");
console.log(str);

// Practice question
let fullName=prompt("Enter your full name without spaces");
let userName="@"+fullName+fullName.length;
console.log(userName);