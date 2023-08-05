const array = [4,5,4,5,8,5,7,8,9,7,8];
let empty = [];
for(i=0;i<=array.length-1;i++){
    let char = array[i];
    if(empty.includes(char)==false){
        empty.push(char);
    }
}
console.log(array);
console.log(`After removig duplicate elements from the Array :`);
console.log(empty);