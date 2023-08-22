console.log(`-----------------------Arrow function Assignment----------------------------------------`);
console.log(`----------------------A-----------------------------`);
let greet = ()=>{
    console.log(`Good Morning , Today is Tuesday...`);
}
greet();

console.log(`----------------------B-----------------------------`);

let multiplication = (a,b,c=1)=>{
    let result = a*b*c;
    console.log(`multiplication if the Number ${a} ,${b} and ${c} is : ${result}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log(`----------------------c-----------------------------`);

let add = (p,q,r,s,t)=>{
    let result = p+q+r+s+t;
    console.log(`Addition of "${p}" ,"${q}" ,"${r}" ,"${s}" ,"${t}" is : ${result}`);
}
add(100,100,200,349,756);
add("I am"," Learning"," E6"," Features"," In Depth"); 