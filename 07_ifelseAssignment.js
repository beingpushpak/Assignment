console.log(`-------------------------Assignment-1---------------------------`);
console.log(`-------------------------Part-1---------------------------`);
function oddEven(number){
    var num = +number;
    if (number <= 0 || isNaN(num)) {
        console.log(`This number ${number} is invalid`);
    } else {
        if (number%2==0) {
            console.log(`${number} is even`);
        } else {
            console.log(`${number} is odd`);
        }
    }
}
oddEven(45);
oddEven(70);
oddEven(67);
oddEven(98);
console.log(`-------------------------Part-2---------------------------`);
var str = "JavaScript-ES6";
var len = str.length;
if (len>10) {
    console.log(`"${str}" is contain more than 10 charactors`);
} else {
    console.log(`"${str}" is contain less than 10 charactors`);
}
console.log(`-------------------------Part-3---------------------------`);
var str = "JavaScript-ES6";
var start = str.startsWith('Java');
if (start==true) {
    console.log(`"${str}" is start with "Java" is true"`);
} else {
    console.log(`"${str}" does ont start with "Java"`);
}