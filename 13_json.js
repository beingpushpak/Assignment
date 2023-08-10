let detail = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev","DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32, laham st",
        "city" : "USA",
        "country" : "Austria"
    },
    "referred-by" : "E0012"
}`
console.log(`------------------------------------------------`);
//for log Dev
let newDetail = JSON.parse(detail); //for converting string to object JSON.parse() method
console.table(newDetail);
for (let index = 0; index < newDetail.role.length; index++) {
    let chr = newDetail.role[index]
    if(chr=="Dev"){
        console.log("Dev");
    }
    
}
console.log(`------------------------------------------------`);
//for log Melon
let newStrArray = newDetail.name.split(" ");
console.log(newStrArray);
for (let index = 0; index < newStrArray.length; index++) {
    let chr = newStrArray[index]
    if(chr=="Melon"){
        console.log("Melon");
    }
    
}
console.log(`------------------------------------------------`);
//log 2019
let year = newDetail.doj.split("-");

console.log(year);
console.log(year[year.length-1]);