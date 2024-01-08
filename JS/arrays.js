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