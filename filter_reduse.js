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

//employee from wipro company

const wipro_emp = obj_array.filter((obj)=>{
    return obj.compony=='wipro';
});

const wipro = wipro_emp.map((emp)=>{
    return emp.name;
})
console.log(`name of employee who is working work in wipro : ${wipro}`);

//employee from IT or HR company

const ithr_emp = obj_array.filter((obj)=>{
    return obj.dept=='IT' || obj.dept=='HR';
});

const name_it_hr = ithr_emp.map((employee)=>{
    return employee.name;
})
console.log(`name of employee who is working in IT OR HR : ${name_it_hr}`);

//employees who's ID >50

const emp_id = obj_array.filter((obj)=>{
    return obj.id>50;
});

const id = emp_id.map((employee)=>{
    return employee.name;
})
console.log(`name of employee whose id >50 : ${id}`);

//employees who's name start with a or v or m 

const emp_name = obj_array.filter((obj)=>{
    return obj.name.startsWith('a')|| obj.name.startsWith('m')|| obj.name.startsWith('v');
});

const amv = emp_name.map((employee)=>{
    return employee.name;
})
console.log(`name start with a v m: ${amv}`);

//avarage salary of all dept

const salary_obj = obj_array.map((obj)=>{
    return obj.salary;
})

const sum = salary_obj.reduce((rv,cv)=>{
    return rv+cv;
})

console.log(`avarage salary : ${sum/salary_obj.length}`);

//avarage salary of IT department

const dept_IT = obj_array.filter((obj)=>{
    return obj.dept=='IT';
})

const it_salary = dept_IT.map((avg)=>{
    return avg.salary;
})

const avg_salary = it_salary.reduce((rv,cv)=>{
    return rv+cv;
})
console.log(`avarage salary of IT department is : ${avg_salary/it_salary.length}`);
