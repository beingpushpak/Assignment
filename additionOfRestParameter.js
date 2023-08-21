function add(num1, num2, ...num ){   //...num return as array 
    // console.log(`num1 ${num1},  num2 ${num2}`);
    // console.log(num);
    let add = num1 + num2;
    let sum = 0;
    for (let i = 0; i<num.length; i++) {
        let chr = num[i];
        sum = sum + chr;
    }
    let total = add + sum;
    console.log(`The values are  : ${num1}, ${num2}, ${num} and its total Sum is =>  ${total}`);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);