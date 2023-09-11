const arr = [113,45,56,11,32,45,109,799,56,45];

let empt_arr = [];

for(let i=arr.length-1;i>=0;i--){
    let num = arr[i]
    empt_arr.push(num)
}

console.log(empt_arr);

//sorting array in without using costom logic

arr.sort();
console.log(arr);

//sorting array in assensding order

arr.sort((n1,n2)=>{
  return n1>n2 ? 1:-1;
})
console.log(arr);

// greatest number of array

console.log(`biggest number in array is :${arr[arr.length-1]}`);

// smallest number of array

console.log(`smallest number in array is :${arr[0]}`);

//remove the duplicates

const unique_arr = [...new Set(arr)]
console.log(unique_arr);

//sorting for object 

class employee {
    constructor(id,name,dept,salary,compony){
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.salary = salary;
        this.compony = compony;
    }
}

const anil = new employee(44,'anil','IT',50000,'TCS');

const radha = new employee(33,'radha','HR',74000,'wipro');

const rishi = new employee(55,'rishi','Fianance',47000,'TCS');

const sonali = new employee(66,'sonali','Fianance',45000,'INFY');

const monika = new employee(77,'monika','IT',40000,'wipro');

const vinayak = new employee(88,'vinayak','IT',75000,'TCS');

const mahesh = new employee(99,'mahesh','HR',85000,'INFY');

//adding object in array

const obj_array = [];

obj_array.push(anil);

obj_array.push(radha);

obj_array.push(rishi);

obj_array.push(sonali);

obj_array.push(monika);

obj_array.push(vinayak);

obj_array.push(mahesh);

//sorting object in order to id

obj_array.sort((a,b)=>{
    return a.id > b.id ? 1 : -1;
})

for (const element of obj_array) {
    console.log(element.name , element.id , element.dept);
}
console.log(`------------------------------------------------------------------------------`);
//sorting object in order to dept

obj_array.sort((x,y)=>{
    return x.dept > y.dept ? 1 : -1;
})

console.table(obj_array);

for (const iterator of obj_array) {
    console.log(`Department : ${iterator.dept}, name : ${iterator.name}`);
}

console.log(`------------------------------------------------------------------------------`);

//sorting object in order to salary
obj_array.sort((p,q)=>{
    return p.salary>q.salary ? 1 : -1;
})
console.table(obj_array);

for (const wage of obj_array) {
    console.log(`name :${wage.name}, salary : ${wage.salary} , department : ${wage.dept}`);
}