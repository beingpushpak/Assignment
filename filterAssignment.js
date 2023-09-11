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

//avarage salary of all compony

const wages = obj_array.map((wage)=>{
    return wage.salary;
})

const sum = wages.reduce((running_value,value)=>{
    return running_value + value;
})

console.log(`avarage salary is : ${sum/wages.length}`);


//avarage salary of TCS compony

const tcs_compony = obj_array.filter((obj)=>{
    return obj.compony === 'TCS';
})

const tcs_salary = tcs_compony.map((sal)=>{
    return sal.salary
})

const salary_sum = tcs_salary.reduce((rv,cv)=>{
    return rv + cv;
})

console.log(`avarage salary is : ${salary_sum/tcs_compony.length}`);