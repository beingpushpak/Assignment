console.log(`--------------------Implicite conversion to string-----------------------`);

var result = '3' + 2;
console.log(`The result of '3' + 2 is ${result} and type of result is ${typeof result} `); 
//result is 32 and its type is string becuase of 2 is internally convert into string and it gives '3' + '2' ='32' just like concatination of two string
console.log(`//result is 32 and its type is string becuase of 2 is internally convert into string and it gives '3' + '2' ='32' just like concatination of two string`);
console.log(`--------------------------------------------------------------------`);
var result = '3' + true; 
console.log(`The result of '3' + true is ${result} and type of result is ${typeof result} `); 
//result is 3true and its type is string becuase of true is internally convert into string and it gives '3' + 'true' ='3true' just like concatination of two string
console.log(`//result is 3true and its type is string becuase of true is internally convert into string and it gives '3' + 'true' ='3true' just like concatination of two string`);
console.log(`--------------------------------------------------------------------`);
var result = '3' + undefined; 
console.log(`The result of '3' + undefined is ${result} and type of result is ${typeof result} `); 
//result is 3undefined and its type is string becuase of undefined is internally convert into string and it gives '3' + 'undefined' ='3undefined' just like concatination of two string
console.log(`//result is 3undefined and its type is string becuase of undefined is internally convert into string and it gives '3' + 'undefined' ='3undefined' just like concatination of two string`);
console.log(`--------------------------------------------------------------------`);
var result = '3' + null; 
console.log(`The result of '3' + null is ${result} and type of result is ${typeof result} `); 
//result is 3null and its type is string becuase of null is internally convert into string and it gives '3' + 'null' ='3mull' just like concatination of two string
console.log(`//result is 3null and its type is string becuase of null is internally convert into string and it gives '3' + 'null' ='3mull' just like concatination of two string`);
console.log(`--------------------Implicite boolean to number-----------------------`);
//if boolean is used true = 1 and false = 0

var result = '4' - true;
console.log(`The result of '4' - true is ${result} and type of result is ${typeof result} `); 
//the result is 3 and its type is number because of internally '4' is convert 4 (number) and true convert into number that is 1 and we got result like 4-1 = 3
console.log(`//the result is 3 and its type is number because of internally '4' is convert 4 (number) and true convert into number that is 1 and we got result like 4-1 = 3 `);
console.log(`--------------------------------------------------------------------`);
var result = 4 + true;
console.log(`The result of 4 + true is ${result} and type of result is ${typeof result} `); 
//the result is 5 and its type is number because of internally true convert into number that is 1 and we got result like 4+1 = 5
console.log(`//the result is 5 and its type is number because of internally true convert into number that is 1 and we got result like 4+1 = 5`);
console.log(`--------------------------------------------------------------------`);
var result = 4 + false;
console.log(`The result of  4 + false is ${result} and type of result is ${typeof result} `); 
//the result is 4 and its type is number because of internally false convert into number that is 0 and we got result like 4+0 = 4
console.log(`//the result is 4 and its type is number because of internally false convert into number that is 0 and we got result like 4+0 = 4 `); 

console.log(`--------------------Implicite string to number-----------------------`); 
var result = '4' - '2';
console.log(`The result of  '4' - '2' is ${result} and type of result is ${typeof result} `); 
//internally '4' and '2' convert into a number and we got a result 4 - 2 = 2
console.log(`//internally '4' and '2' convert into a number and we got a result 4 - 2 = 2`);
console.log(`--------------------------------------------------------------------`);
var result = '4' - 2;
console.log(`The result of '4' - 2 is ${result} and type of result is ${typeof result} `); 
//internally '4' convert into a number and we got a result 4 - 2 = 2
console.log(`//internally '4' convert into a number and we got a result 4 - 2 = 2`);
console.log(`--------------------------------------------------------------------`);
var result = '4' * 2;
console.log(`The result of '4' * 2 is ${result} and type of result is ${typeof result} `); 
//internally '4' and '2' convert into a number and we got a result 4 * 2 = 8
console.log(`//internally '4' and '2' convert into a number and we got a result 4 * 2 = 8`);
console.log(`--------------------------------------------------------------------`);
var result = '4' / 2;
console.log(`The result of '4' / 2 is ${result} and type of result is ${typeof result} `); 
//internally '4' convert into a number and we got a result 4 / 2 = 2
console.log(`//internally '4' convert into a number and we got a result 4 / 2 = 2`);