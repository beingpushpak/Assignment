console.log(`-------------------------Assignment-1-------------------------------`);
var tcs = function(gradScore,hscScore,sscScore,name){
    var result = gradScore>=70||hscScore>=80||sscScore>=90 ? `Congrates ${name} you are eligible for TCS interview` : `Unfortunatly ${name} you are not eligible for TCS interview`;
    console.log(`${result}`);
}
tcs(80,86,90,"Pushpak");
tcs(70,65,55,"Sachin");
tcs(60,79,88,"Swapnil");
console.log(`-------------------------Assignment-2-------------------------------`);
console.log(`-------------------------Part-1-------------------------------`);
function maleMarriageEligibility (gender,age,boyName){
    var eligibility = gender=="male" && age >=21 ? `${boyName} you are eligible for marriage` : `${boyName} you are not eligible for marriage`;
    return eligibility;
}
var result1 = maleMarriageEligibility("male",25,"Bill Gates");
console.log(result1);

var result2 = maleMarriageEligibility("male",17,"Stew jobs");
console.log(result2);

console.log(`-------------------------Part-2-------------------------------`);
function femaleMarriageEligibility (gender,age,girlName){
    var eligibility = gender=="female" && age >=18 ? `${girlName} you are eligible for marriage` : `${girlName} you are not eligible for marriage`;
    return eligibility;
}
var result1 = femaleMarriageEligibility("female",16,"Jenifer");
console.log(result1);

var result2 = femaleMarriageEligibility("female",27,"Malinda Gates");
console.log(result2);