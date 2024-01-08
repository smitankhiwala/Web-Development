// array is a special type of object and instead of key we use index
// arrays are mutable
let marks=[97,82,75,64,36];
console.log(marks);
console.log(marks.length);

let heroes=["batman","superman","wonder woman","green lantern","flash","cyborg","martian manhunter","aquaman"];
console.log(heroes);
console.log(heroes.length);

marks[0]=66;
console.log(marks);

for(let i=0;i<heroes.length;i++) {
    console.log(heroes[i]);
}

// for-of nd for-in loops are lso used to prnt arrays but for-of loop is referred
for(let ele of heroes) {
    console.log(ele);
    console.log(ele.toUpperCase());
} 

// Practice Question
let classMarks=[85,97,44,37,76,60];
let len=classMarks.length;
let s=0;
for(let val of classMarks) {
    s=s+val;
}
let avg=s/len;
console.log(`Average marks of the class is ${avg}`);

// Practice Question
let items=[250,645,300,900,50];
let offer;
i=0;
// for(val of items) {
//     // console.log(`Price at index ${idx} = ${val}`);
//     offer=val/10;
//     items[i]-=offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }

for(i=0;i<items.length;i++) {
    offer=items[i]/10;
    items[i]-=offer;
}
console.log(`Value after offer = ${items}`);

let foodItems=["potato","apple","litchi","tomato"];
foodItems.push("chips","burger","paneer");
console.log(foodItems);

let deletedItem= foodItems.pop();
console.log(`deleted ${deletedItem}`);

// creates a new string with array elements but does not do any changed to the original array
console.log(foodItems.toString());

let marvelHeroes=["thor","spiderman","ironman"];
let dcHeroes=["superman","batman"];
let indianHeroes=["shaktiman","krish"];

heroes=marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);

// unshift() adds elements to the start of the array
marvelHeroes.unshift("antman");
console.log(marvelHeroes);

// shift() removes elements from the start of the array
let val=marvelHeroes.shift();
console.log(`deleted ${val}`);

// slice() does not do changes in the original array
marvelHeroes=["thor","spiderman","ironman","antman","dr. strange"];
console.log(marvelHeroes.slice(1,3));
console.log(marvelHeroes.slice(1));

// splice() can be used to add, remove or replace an element and it creates a new array
// replace element
let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
console.log(arr);

// add element
arr=[1,2,3,4,5,6,7];
arr.splice(2,0,101);
console.log(arr);

// remove element
arr=[1,2,3,4,5,6,7];
arr.splice(3,1);
console.log(arr);

// if we pass only one index it deletes all elements from that index
arr.splice(3);
console.log(arr);

// if we don't pass any index then it does not do anything
arr.splice();
console.log(arr);

// practice question
let comp=["Bloomberg","Microsoft","Uber","Google","IBM","Netfix"];
console.log(comp);

comp.shift();
console.log(comp);

comp.splice(1,1,"Ola");
console.log(comp);

comp.push("Amazon");
console.log(comp);