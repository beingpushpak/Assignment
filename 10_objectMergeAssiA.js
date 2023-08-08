console.log(`---------------------------Assignment-1-------------------------------------`);
console.log(`---------------------------Part-1-------------------------------------`);
let personalDetails = {
    firstName : "pushpak",
    lastName : "metkari",
    age : 27,
    contact : "8208-68-8932"
}
console.log(personalDetails);
console.log(`---------------------------part-2-------------------------------------`);

let collageDetails = {
    collageName : "KBP Collage",
    location : "Pandhapur",
    contact : "021-243576",
    emailId : "abc@gmail.com"
}
console.log(collageDetails);
// for merging the Object
let studentDetails = Object.assign({},personalDetails,collageDetails);
console.log(`Detils :=> Full Name : ${studentDetails.firstName} ${studentDetails.lastName} , 
Age : ${studentDetails.age} , Mobile No : ${studentDetails.contact} , Collage Name : ${studentDetails.collageName} ,
City : ${studentDetails.location} , Contact : ${studentDetails.contact} , Email ID : ${studentDetails.emailId}`);

console.log(`---------------------------part-3-------------------------------------`);

const friends = ["Tanaji","Vijay","Swapnil","Suhas","Sagar","Vushal","Jivan","Anand"];
//for freezing the array
console.log(friends);
 Object.freeze(friends);
 console.log(`---------------------------part-4-------------------------------------`);

//for iteration for of loop
for (const names of friends) {
    console.log(names);
}
console.log(`---------------------------part-5-------------------------------------`);
let companyName = "Codemind Technology";
let len = companyName.length;
console.log(`Length of string : ${len}`);
let indx = companyName.indexOf("Technology");
console.log(`indexOf "Technology" : ${indx}`);

let new_word = "";
for(let i=0;i<=8;i++){
    let word1 = companyName.charAt(i);
    new_word += word1;
}
for(let j=18;j>8;j--){
    let word2 = companyName.charAt(j);
    new_word += word2;
}
console.log(`Given name : '${companyName}' AND Result : '${new_word}'`);