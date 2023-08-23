const array = [1,-7,40,502,-77,91,0,108,90,-601];
//syntax of for each loop is array.forEach((current value,index,Array)=>{})
//log arrey with index number
array.forEach((num,index)=>{
    console.log(`Index number of ${num} is ${index}`);
})
console.log(`--------------------------------------------------------`);
//positive values in array
console.log(`positive numbers in array is : `);
array.forEach((num)=>{
    if(num >= 0){
        console.log(num);
    }
})
console.log(`--------------------------------------------------------`);
//negetive values in array
console.log(`negetive values in array is :`);
const negetive_array = [];
array.forEach((num)=>{
    if(num < 0){
        negetive_array.push(num);
    }
})
console.log(negetive_array);
console.log(`--------------------------------------------------------`);
//even numbers
console.log(`Even numbers in array is : `);
array.forEach((num)=>{
    if(num%2==0){
        console.log(num);
    }
})
console.log(`--------------------------------------------------------`);
//addition of all numbers;
let sum = 0;
array.forEach((num)=>{
    sum = sum + num;
})
console.log(`sum of all numbers in array is : ${sum}`);
console.log(`--------------------------------------------------------`);
//even index  numbers;
array.forEach((num,index)=>{
    if(index % 2 == 0){
        console.log(`${num} and it's Index number ${index}`);
    }
})
