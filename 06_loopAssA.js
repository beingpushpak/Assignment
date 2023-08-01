console.log(`---------------------------Assigment-1--------------------------------`);
console.log(`---------------------------Part-1--------------------------------`);
//Program for count vowel
function vowel(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        let chr = str.charAt(i);
        if (chr=="a"|| chr=="A"|| chr=="e"||chr=="E"|| chr=="i"|| chr=="I"|| chr=="o"|| chr=="O"|| chr=="u"|| chr=="U") {
            console.log(chr);
            count=count +1;
        }
    }
    console.log(`the total numbers vowels in "${str}" is :${count}`);
}
vowel("I am good IT developer");
console.log(`---------------------------Part-2--------------------------------`);
function sum(){
    let add = 0;
    for(let i=1;i<=5;i++){
        let cube = i*i*i;
        console.log(cube);
        add = add + cube;
    }
    console.log(`Sum of first five numbers is :${add}`);
}
sum();
console.log(`---------------------------Part-3--------------------------------`);
function odd(string){
    let revstr = "";
    for(let i=0;i<=string.length-1;i++){
        let chr = string.charAt(i);
        if(i%2==1 && chr!=" "){
            revstr = revstr + chr +" ";
        }
    }
    console.log(`"${string}" and its Odd position Charators are : ${revstr}`);
}
odd("Hard work are always pays back");
console.log(`-------------------------------------`);
odd("Soon I will be Angular champ");
console.log(`---------------------------Assigment-2--------------------------------`);
function reverese(str1){
    let revstr="";
    for(let i=str1.length-1;i>=0;i--){
        let chr = str1.charAt(i);
        if(chr!=" "){
            revstr = revstr + (chr);
        }
        
    }
    console.log(`"${str1}" after reverse it will be :"${revstr}"`);
}
reverese("Hard work are always pays back");
console.log(`------------------------------`);
reverese("Soon I will be Angular champ")