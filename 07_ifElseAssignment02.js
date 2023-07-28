console.log(`---------------------------Assignment-3---------------------------`);
var eligible = function(age){
    var invalidAge = +age;
    if (age<=0 || age>130 || isNaN(invalidAge)) {
        console.log(`You Entered Invalid Data ;Please Enter The Valid Data`);
    } else if(age>=18) {
        console.log(`Your Age Is ${age} and you are eligible for vote`);
    } else {
        console.log(`Your Age Is ${age} and you are not eligible for vote`);
    }

}
eligible(45);
eligible(17);
eligible(20);
eligible(-10);
eligible(8);
eligible(200);
eligible(0);
eligible(null);
eligible(undefined);