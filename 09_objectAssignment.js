console.log(`----------------------Assgnment-1-----------------------------`);
let professor ={
    nameOfprofessor : "Kore L.M",
    subject : "Mathamatics",
    Collage : "SSVM",
    Age : 40,
    MobNo:9988776655,
    Address : "Mahud",
    Degrees : {
        engineering : 'CSC',
        PHD :'Advance Computerring',
        Specialization : 'Advance mathamatics',
    },
    certificates : ['Hacker Rank Participation','Cetificate in IFF course','Certificate in Advance programming'],
    degree1 : function(){
        return `Degrees are Engeneering in ${professor.Degrees.engineering}, PHD in ${professor.Degrees.PHD} and Specializaton in ${professor.Degrees.Specialization} `
    }
}
console.log(`------------------------------------------`);

professor.totalExperiance = '14 years'; //adding properties
console.log(`adding new property Total Experiance is ${professor.totalExperiance}`);

console.log(`------------------------------------------`);

professor.Address = 'Mumbai'; //modify address
console.log(`Modifying address mahud to ${professor.Address}`);

console.log(`------------------------------------------`);

professor.certificates.push('Oracle Cetified');//add valeu in the end of array in object
console.log(professor.certificates);

console.log(`------------------------------------------`);

let result = professor.degree1();//function with return value
console.log(result);

console.log(`------------------------------------------`);

let last = professor.certificates.length-1;//for log last element of array
let element = professor.certificates[last];
console.log(`last element in cetifiacte is ${element}`);

console.log(`---------------------Assinment-2------------------------`);
let sbiBank = {
    bankName : "SBI Bank",
    location : "Pandharpur",
    accNumber : 1122334455,
    ifscCode : "SBI0000556",
    interestRate :" 6.7%",
    showDetails : function(){
        console.log(`Deatails : Bank Name : ${sbiBank.bankName}, Bank location : ${sbiBank.location}, Account No : ${sbiBank.accNumber}, IFSC Code : ${sbiBank.ifscCode}, Interest : ${sbiBank.interestRate}`);
    }
}
sbiBank.showDetails();

let axisBank = {
    bankName : "Axis Bank",
    location : "Solapur",
    accNumber : 1122334455,
    ifscCode : "Axis0000556",
    interestRate :" 6.9%",
    showDetails : function(){
        console.log(`Deatails : Bank Name : ${axisBank.bankName}, Bank location : ${axisBank.location}, Account No : ${axisBank.accNumber}, IFSC Code : ${axisBank.ifscCode}, Interest : ${axisBank.interestRate}`);
    }
}
axisBank.showDetails();

let hdfcBank = {
    bankName : "HDFC Bank",
    location : "Sangali",
    accNumber : 1122334455,
    ifscCode : "HDFC0000556",
    interestRate :"7%",
    showDetails : function(){
        console.log(`Deatails : Bank Name : ${hdfcBank.bankName}, Bank location : ${hdfcBank.location}, Account No : ${hdfcBank.accNumber}, IFSC Code : ${hdfcBank.ifscCode}, Interest : ${hdfcBank.interestRate}`);
    }
}
hdfcBank.showDetails();

let yesBank = {
    bankName : "Yes Bank",
    location : "Dighachi",
    accNumber : 1122334455,
    ifscCode : "SBI0000556",
    interestRate :"5.77%",
    showDetails : function(){
        console.log(`Deatails : Bank Name : ${yesBank.bankName}, Bank location : ${yesBank.location}, Account No : ${yesBank.accNumber}, IFSC Code : ${yesBank.ifscCode}, Interest : ${yesBank.interestRate}`);
    }
}
yesBank.showDetails();
