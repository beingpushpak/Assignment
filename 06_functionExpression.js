console.log(`-----------------------Assignment----------------------`);
console.log(`-----------------------Part-1----------------------`);
var sqr = function(x){
    var result = x*x;
    console.log(`The square of ${x} is : ${result}`);
}
sqr(5);
sqr(6);
sqr(25);
sqr(100);
sqr(67.89);
sqr(59);
console.log(`-----------------------Part-2----------------------`);
console.log(`The type of given function is : ${typeof sqr}`);
console.log(`-----------------------Part-3----------------------`);
var rect = function(length,bredth){
    var area = length*bredth;
    return area;
}
var output = rect(499,917);
console.log(`The area of rectangle is : ${output}`);
console.log(`-----------------------Part-4----------------------`);
var swapValue = function(x,y){
    console.log(`Before swapping the values are :${x} and ${y}`);
    var temp = x;
    x = y;
    y = temp;
    console.log(`After swapping the values are :${x} and ${y}`);
}
swapValue("MAHI","RAINA");
swapValue(55,77);
console.log(`-----------------------Part-5----------------------`);
var statement = function(string){
    var len =string.length;
    console.log(`Total number of charactor in given string is : ${len}`);
    var ind = string.charAt(6);
    console.log(`the charator at index 6 is : ${ind}`);
    var inde = string.charAt(11);
    console.log(`the charator at index 11 is : ${inde}`);
    var last = len - 1;
    var charLast = string.charAt(last);
    console.log(`The last charator of given String is : ${charLast}`);
    var firstChar = string.charAt(0);
    console.log(`The first charator of given String is : ${firstChar}`);
    var thirdLast = string.length-3;
    console.log(`Third last charactor of given string is : ${thirdLast}`);
    var word = string.split(" ");
    var total = word.length;
    console.log(`Total words in the given string is : ${total}`);
}
statement("JS is the most popular language of internet")