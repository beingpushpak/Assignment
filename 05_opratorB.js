console.log(`---------------------------Assignment-2------------------------------`);
console.log(`---------------------------Part-1------------------------------`);
var greaterNumber = function(x,y){
    var great = x > y ? x : y; //using ternary oprator
    console.log(`The greater number between ${x} and ${y} is : ${great}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`---------------------------Part-2------------------------------`);
var isEvenOrOdd = function(x){
    var deside = x%2==0 ? true : false;
    return deside;
}
var num1 = isEvenOrOdd(29);
console.log(`Is number 29 even : ${num1}`);

var num2 = isEvenOrOdd(44);
console.log(`Is number 44 even : ${num2}`);

var num3 = isEvenOrOdd(0);
console.log(`Is number 0 even : ${num3}`);

var num4 = isEvenOrOdd(101);
console.log(`Is number 101 even : ${num4}`);

console.log(`---------------------------Part-3------------------------------`);
var wordLength = function(string){
    var len = string.length;
    console.log(` length of ${string} is : ${len}`);
    var deside = len%2==0 ? "EVEN" : "ODD";
    return deside;
}
var exp1 = wordLength("javascript");
console.log(`The length of "JavaScript" is ${exp1}`);

var exp2 = wordLength("developer");
console.log(`The length of "Developer" is ${exp2}`);

var exp3 = wordLength("google");
console.log(`The length of "Google" is ${exp3}`);