console.log(`---------------------assignment Arrow function Advance---------------------------`);
console.log(`-------------------------Part-1--------------------------`);
class employee {
    constructor(id,name,depart,compony,salary){
        this.id = id;
        this.name = name;
        this.depart = depart;
        this.compony = compony;
        this.salary = salary
    }
}

let anil = new employee(22,"ANIL","IT","TCS",50000);

let radha = new employee(33,"RADHA","HR","Wipro",74000);

let rishi = new employee(55,"RISHI","Fianance","TCS",47000);

let sonali = new employee(66,"SONALI","Fianance","Infy",45000);

let monali = new employee(77,"MONALI","IT","Wipro",40000);

let vinayak = new employee(88,"VINAYAK","IT","TCS",75000);

let mahesh = new employee(99,"MAHESH","HR","Infy",85000);

//adding creating object in Array
let arrey = [];
arrey.push(anil,radha,rishi,sonali,monali,vinayak,mahesh);
// console.table(arrey);
//itrate array using for each loop 
arrey.forEach((emp)=>{
    if(emp.compony == "TCS"){
        console.log(`The employee who is working in "TCS" Company are : ${emp.name} and His/Her Company is ${emp.compony}`);
    }
});

console.log(`-------------------------Part-2--------------------------`);
  //iterating over arrey using for of loop
for (const dep of arrey) {
    if(dep.depart == "Fianance"){
        console.log(`The employee who is working in "Fianance" department are : ${dep.name} and His/Her depatment is ${dep.depart}`);
    }
}

console.log(`-------------------------Part-3--------------------------`);
//itrate array using for each loop 


arrey.forEach((R)=>{
    let nm = R.name;
    if(nm.startsWith("R")){
        console.log(`Employee's name start with "R" whose Details :"ID" = ${R.id},"Name" = ${R.name}, "Department" = ${R.depart}, "compony" = ${R.compony},"Salary" = ${R.salary}`);
    }
})

console.log(`-------------------------Part-4--------------------------`);

//itrate array using for each loop
arrey.forEach((emp)=>{
    if(emp.salary > 75000){
        console.log(`The employee whose salary greater than 75000 is : "Name" : ${emp.name}, "salary" : ${emp.salary}, "Compony" : ${emp.compony}`);
    }
});
 
console.log(`-------------------------Part-5--------------------------`);
//itrate array using for each loop
arrey.forEach((emp)=>{
    if(emp.salary >= 50000){
        console.log(`The employee whose salary greater than or equal 50000 is : "ID" = ${emp.id},"Name" = ${emp.name}, "Department" = ${emp.depart}, "compony" = ${emp.compony},"Salary" = ${emp.salary}`);
    }
});

console.log(`-------------------------Part-6--------------------------`);
//itrate array using for each loop
arrey.forEach((emp)=>{
    if(emp.compony == "Infy"){
        console.log(`The employee who is working in "Infy" is : "ID" = ${emp.id},"Name" = ${emp.name}, "Department" = ${emp.depart}, "compony" = ${emp.compony},"Salary" = ${emp.salary}`);
    }
});
 