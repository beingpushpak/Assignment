const array = [20,11,40,25,23,11,9,31,60,2,19];


//adding 10 in each element

const new_array = array.map((value)=>{
    return value + 10;
});

console.log(new_array);

//cube of each element;

const cube_array = array.map((num)=>{
    return num*num*num;
});

console.log(cube_array);


//adding index value in array

const add = array.map((num,index)=>{
    return num + index;
});

console.log(add);

console.log(`----------------------------------------------------------------------`);

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

//log name of employee

const name_emp = obj_array.map((obj)=>{
    return obj.name;
});

console.log(name_emp);

//log the dept name 

const dept_name = obj_array.map((obj)=>{
    return obj.dept
});

console.log(dept_name);

// log emp id 

const emp_id = obj_array.map((num)=>{
    return num.id;
})

console.log(emp_id);


