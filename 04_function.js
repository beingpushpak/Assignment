
console.log("-------------PART 1 :Bank Details--------------");//function with arrgument
function bankDetail(bankName,accountnum,location,pinCode){
    console.log("Bank name is :",bankName,"Account Number is :",accountnum,"Location is :",location,"PIN is :",pinCode);
}
bankDetail("CICI Bank",876534289193,"PUNE",431202);
bankDetail("Axis Bank",456378263945,"MUMBAI",441202);
bankDetail("HDFC Bank",897645231568,"PUNE",435627,"pushpak");
console.log("-------------PART 2--------------");

console.log("-------------------step 1 :function with no Arguments---------------------");

function noarg(){
    console.log("Earth is Round");//function with no arrgument or parameter 
}
noarg();
function noarg1(){
    console.log("INDIA is GREAT!!!");//function with no arrgument or parameter 
}
noarg1();

console.log("-------------------step 2 : personal Detail---------------------")

function personalDetail(firstName,lastname,collageName){
    console.log("First Name is :",firstName,"Last Name is :",lastname,"Collage Name is :",collageName);
}
personalDetail("PUSHPAK","METKARI","KBP Collage Pandharpur");

console.log("-------------------step 3 : swaping the Values---------------------")

function swap(arg1,arg2){
    console.log("Before swaping","agr1 =",arg1,"arg2 =",arg2);
    var temp = arg1;
    arg1=arg2;
    arg2=temp;
    console.log("After swaping","agr1 =",arg1,"arg2 =",arg2);
}
swap("VIRAT","ANUSHKA");
swap(1000,2000);

console.log("-------------------step 4 : Add the Values---------------------")

function add(num1,num2,num3){
console.log("the values are",num1,num2,num3);
var sumation = num1+num2+num3;
console.log("The addition is",sumation);
}
add(10.23,600,40);
add("HELLO","GOOD","MORNING");


