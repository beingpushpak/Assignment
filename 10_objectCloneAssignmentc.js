const arrayNum = [20,3,4,56,90,400,49];
console.log(`arrayNum :`);
console.log(arrayNum);
console.log(`-----------------------------------------------------`);
//shaloow Clone
const newArray = arrayNum;
console.log(`New array by shallow cloning :`);
console.log(newArray);
console.log(`-----------------------------------------------------`);
//cloned array updating
newArray.push(56,66);
console.log(`New array by pushing 56 & 66 :`);
console.log(newArray);
console.log(`-----------------------------------------------------`);
console.log(`original Array`);
console.log(arrayNum);
console.log(`-----------------------------------------------------`);
//deep cloning by spread oparator
let deepCloneArray = [...arrayNum];
deepCloneArray.push(10,25);
console.log(`new array after deep cloning and push `);
console.log(deepCloneArray);
console.log(`origanal Array :`);
console.log(arrayNum);
console.log(`-----------------------------------------------------`);
const evenArray = [2,30,26,14];
//merge with arraynum
let mergeArray =  [...arrayNum, ...evenArray] // also let a = Object.assign([],arrayNum,evenArray); 
console.log(`After merge array :`);
console.log(mergeArray);
console.log(`-----------------------------------------------------`);
const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40000INR",
        aug_month : "50000INR",
        june_month : "65000INR",
    },
    address : {
        locality : {
            colony : "om vrindavan society",
            street : "kanch pokali , 423314"
        },
        city : "mumbai",
        state : "maharastra",
        country : "india"
    },
    mobile_number : ["+91-8208-68-8932" , "1800-1000-123" , "022-273485"]

}

console.log(`Address is : Colony : ${employee_info.address.locality.colony} , Street : ${employee_info.address.locality.street} , City : ${employee_info.address.city} , State : ${employee_info.address.state} ,  Country : ${employee_info.address.country}`);
console.log(`Mobile Numbers : ${employee_info.mobile_number[0]}`);
console.log(`Mobile Numbers : ${employee_info.mobile_number[1]}`);
console.log(`Mobile Numbers : ${employee_info.mobile_number[2]}`);
console.log(`------------------------------------------------------------------------`);
//deep clone by JSON only for nested object
let new_emp = JSON.parse(JSON.stringify(employee_info));
console.log(`July Salary before upadate : ${new_emp.salary.july_month}`);
new_emp.salary.july_month = "80000INR";
console.log(`July Salary After upadate : ${new_emp.salary.july_month}`);
console.log(new_emp.salary);

employee_info.address.country = "United Kingdom",

console.log(employee_info.address.country);
console.log(new_emp.address.country);
