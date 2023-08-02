console.log(`-------------------------Assinment-2-----------------------------`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`---------------------Part-1--------------------------`);
console.log(arrayNumbers);
let len = arrayNumbers.length;
console.log(`Length of array is ${len}`);
console.log(`---------------------Part-2--------------------------`);
let first = arrayNumbers[0];
console.log(`First element of array is : ${first}`);
let last = arrayNumbers.length-1;
let lastElement = arrayNumbers[last];
console.log(`Last element of array is : ${lastElement}`);
console.log(`---------------------Part-3--------------------------`);
let thirdLast = arrayNumbers.length-3;
let thirdLastElement = arrayNumbers[thirdLast];
console.log(`Third Last element is : ${thirdLastElement}`);
console.log(`---------------------Part-4--------------------------`);
console.log(`Even numbers in the array is :`);
for(let i=0;i<=arrayNumbers.length-1;i++){
    let even = arrayNumbers[i];
    if(even%2==0){
        console.log(`${even}`);
    }
}
console.log(`---------------------Part-5--------------------------`);
console.log(`Odd numbers in the array is :`);
for(let i=0;i<=arrayNumbers.length-1;i++){
    let odd = arrayNumbers[i];
    if(odd%2==1){
        console.log(`${odd}`);
    }
}
console.log(`---------------------Part-6--------------------------`);
console.log(`Even positioned element is :`);
for(let i=0;i<=arrayNumbers.length-1;i++){
    if(i%2==0){
        console.log(arrayNumbers[i]);
    }
}
console.log(`---------------------Part-7--------------------------`);
console.log(`odd positioned element is :`);
for(let i=0;i<=arrayNumbers.length-1;i++){
    if(i%2==1){
        console.log(arrayNumbers[i]);
    }
}
console.log(`---------------------Part-8--------------------------`);
let sum = 0;
for(let i=0;i<=arrayNumbers.length-1;i++){
    let chr = arrayNumbers[i];
    sum = sum + chr;
}
console.log(`The total sum of array is : ${sum}`);
console.log(`---------------------Part-9--------------------------`);
console.log(`Multiple of 5 is :`);
for(let i=0;i<=arrayNumbers.length-1;i++){
    let chr1 = arrayNumbers[i];
    if(chr1%5==0){
        console.log(chr1);
    }
}
console.log(`---------------------Part-10--------------------------`);
let include = arrayNumbers.includes(115);
console.log(`Is array include 115 ? : ${include}`);
console.log(`---------------------Part-11--------------------------`);
let include1 = arrayNumbers.includes(23);
console.log(`Is array include 23 ? : ${include1}`);
console.log(`---------------------Part-12--------------------------`);
arrayNumbers.splice(3,0,55,66);
console.log(`After Adding 55,66 before index 3`);
console.log(arrayNumbers);
console.log(`---------------------Part-13--------------------------`);
arrayNumbers.splice(4,3);
console.log(`After deleting 3 element from index 4 is :`);
console.log(arrayNumbers);