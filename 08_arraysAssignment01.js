console.log(`-------------------------Assignment-1----------------------------------`);
console.log(`------------------------Part-1-------------------------`);
const arrayFruites = ["Banana","Orange","Apple","Mango","Watermelon"];
console.log(arrayFruites);
console.log(`First element of array is : ${arrayFruites[0]}`);
console.log(`Last element of array is : ${arrayFruites[arrayFruites.length-1]}`);
console.log(`------------------------Part-2-------------------------`);
arrayFruites.unshift('Papaya'); // for adding element at 0th index use unsift()
console.log(`Adding "papaya" at index 0 :`);
console.log(arrayFruites);
console.log(`------------------------Part-3-------------------------`);
let index = arrayFruites.indexOf('Mango');
console.log(`index of maongo is ${index}`);
arrayFruites.splice(4,1); //meaning is that remove 1 charator from index 4 
console.log("After removing 'Mango' Array will be :");
console.log(arrayFruites);
console.log(`------------------------Part-4-------------------------`);
arrayFruites.push('Pineapple');//push is used for add element at the end
console.log(`Adding "pineapple" at end of array :`);
console.log(arrayFruites);
console.log(`------------------------Part-5-------------------------`);
let len = arrayFruites.length-2;
console.log(`Index of second last element of array is ${len}`);
arrayFruites.splice(4,0,"Dragon Fruite");//slpice (4,0,"") means at index 4 add "" without any replacement
console.log(`after adding "Dragon fruite before second last"`);
console.log(arrayFruites);
console.log(`------------------------Part-6-------------------------`);
let num = arrayFruites.indexOf("Orange");
console.log(`Index of orange is ${num}`);
arrayFruites.splice(2,1,"Kiwi");//which means At index no 2 delete 1 charator and add kiwi 
console.log(`After replacing "Orange" with "kiwi"`);
console.log(arrayFruites);
console.log(`------------------------Part-7-------------------------`);
let mmodif = arrayFruites.slice(1,4);
console.log(`After slicing from 1 to 4 result is :`);
console.log(mmodif);
console.log(`------------------------Part-8-------------------------`);
let last = arrayFruites.length-1;
let lastChr = arrayFruites[last];
let last1 = arrayFruites.length-2;
let last1chr = arrayFruites[last1];
let last2 = arrayFruites.length-3;
let last2chr = arrayFruites[last2];
console.log(`last three elements of the array is : ${lastChr} ${last1chr} and ${last2chr}`);
