console.log(`-----------------------Assignment-2---------------------------`);
function marriageEligibility(gender,age){
    var deside= +age;
    if(gender!="male" && gender!="female" || isNaN(deside)){
        console.log(`please enter valid data!!!`);
    } else if(gender=="male" && age>=21 || gender=="female" && age>=18){
        console.log(`Your gender is ${gender} and your age is ${age} as per Indian contitutional act you are eligible for Marriage`);
    }else{
        console.log(`Your gender is ${gender} and your age is ${age} as per Indian contitutional act you are not eligible for Marriage`);
    }
}
marriageEligibility("male",17);
marriageEligibility("male",25);
marriageEligibility("female",28);
marriageEligibility("female",16);
marriageEligibility("other",35);
marriageEligibility("other",41);