//swaping the string
var name1 = "sweety";
var name2 ="cutie";
console.log("Before swap : ", "name1 = ", name1 , "name2 = ", name2);
//creating temparory variable just beacuase of the value of name2 assign in name1 and value of name1 will update with name2 thats why we store the value of name1 in temparory variable
var temp = name1;
name1 = name2;
name2 = temp;
console.log("After swap : ", "name1 = ",name1 , "name2 = ", name2);
console.log("===================================================================================");
//swaping for  three number
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("Before swap :","num1 = ",num1 , "num2 = ", num2 , "num3 = ", num3);
//creating temparary variable
var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log("After swap :","num1 = ",num1 , "num2 = ", num2 , "num3 = ", num3);

