const array = [20,11,40,25,23,11,9,31,60,2,19];

//for sum 

const sum = array.reduce((rv,cv)=>{
    return rv + cv;
});

console.log(sum);

// multiple of 5 and then sum

const multi = array.filter((num)=>{
    return num%5 == 0;
})

console.log(multi);

const add = multi.reduce((rv,cv)=>{
  return rv+cv;
})

console.log(add);