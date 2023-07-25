console.log(`------------------------Assignment-1------------------------------`);
console.log(`------------------------Part-1------------------------------`);
function squareOfWordLength(string){
    var len = string.length;
    console.log(`The length of ${string} is : ${len}`);
    var sqr = len * len;
    return sqr;
}
var sqr1 = squareOfWordLength("JavaScript");
console.log(`The Square of string "Javascript" length is : ${sqr1}`);

var sqr2 = squareOfWordLength("Google chrome");
console.log(`The Square of string "Javascript" length is : ${sqr2}`)

var sqr3 = squareOfWordLength("Developer Smart");
console.log(`The Square of string "Javascript" length is : ${sqr3}`)

console.log(`------------------------Part-2------------------------------`);
var name1 = function(){
    var str = "I Am Angular Developer";
    var len = str.length;
    console.log(`The length of ${str} is : ${len}`);
    var len1 = str.split(' ');
    var len2 = len1.length;
    console.log(`Total number of word in ${str} is : ${len2}`);
    var divi = len / len2;
    console.log(`The division of string length and number of word is : ${divi}`);
    var multi = len * len2;
    console.log(`The multiplication of string length and number of word is : ${multi}`);
}
name1();