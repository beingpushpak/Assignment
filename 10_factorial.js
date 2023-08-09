function factorial(num){
    let fact = 1;
    for(let i=1;i<=num;i++){
        fact *= i;
    }
    console.log(`Factorial Of ${num} : ${fact}`);
}
factorial(5);
factorial(4);
factorial(6);
factorial(11);
