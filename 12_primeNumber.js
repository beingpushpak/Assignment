let prime = function(num){
    let count = 0;
    for(let i=2;i<num;i++){
        if(num%i!=0){
            count += 1;
        }
    };
    if(count==num-2){
        console.log(`${num} is a prime number`);
    } else{
        console.log(`${num} is a composite number`);
    }
}
prime(11);
prime(19);
prime(21);
prime(45);