const array = [20,11,40,25,23,11,9,31,60,2,19];

const num = array.filter((a)=>{
    return a>50;
});

console.log(num);


const even = array.filter((num)=>{
    return num%2==0;
});

console.log(even);

const odd = array.filter((a)=>{
    return a%2==1;
});

console.log(odd);

const multiple = array.filter((a)=>{
    return a%5==0;
});

console.log(multiple);

const value = array.filter((a)=>{
    return a>=20 && a<=50;
});

console.log(value);

console.log(`---------------------------------------------------------------------------------`);

class employee {
    constructor(id,name,dept,salary,compony){
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.salary = salary;
        this.compony = compony;
    }
}

const anil = new employee(22,'anil','IT',50000,'TCS');

const radha = new employee(33,'radha','HR',74000,'wipro');

const rishi = new employee(55,'rishi','fianance',47000,'TCS');

const sonali = new employee(66,'sonali','fianance',45000,'INFY');

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

// log salary > 50000

const salary = obj_array.filter((obj)=>{
    return obj.salary>50000;
});

console.table(salary);

//log whos dept is HR

const hr = obj_array.filter((obj)=>{
    return obj.dept=='HR';
});

console.table(hr);