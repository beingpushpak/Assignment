console.log(`---------------------------------Assignment-2-----------------------------`);
console.log(`--------------------------clonning for Bank using object.assign()------------------------------------`);

let sbiBank = {
    bankName : "SBI BANK",
    branchManager : "mrs.Dixit D.P.",
    branch : "Solapur",
    contact : "022-213653",
}

let bankLocation = {
    street : "Anna Saheb Patil Street",
    city : "Solapur",
    pin : 413325,
}

//clonning using object.assign method
let urbanBank = Object.assign({},sbiBank);
console.log(`Detail --> SBI  Bank name : ${sbiBank.bankName} , Bank Manager : ${sbiBank.branchManager} , Branch : ${sbiBank.branch} , Contact : ${sbiBank.contact}`);
console.log(`Detail --> Urban Bank Bank name : ${urbanBank.bankName} , Bank Manager : ${urbanBank.branchManager} , Branch : ${urbanBank.branch} , Contact : ${urbanBank.contact}`);

console.log(`-----------------------------clonning for Bank location using spread oparator---------------------------------`);

//clonning using spread oparator
let bankAddress = {...bankLocation}
console.log(`Location for SBI Bank --> Street : ${bankLocation.street} , City : ${bankLocation.city} , PIN : ${bankLocation.pin}`);
console.log(`Location for Urban Bank --> Street : ${bankAddress.street} , City : ${bankAddress.city} , PIN : ${bankAddress.pin}`);

console.log(`---------------------------merge Bank,Location,Interest-----------------------------------`);

let rateOfInterest = {
    homeLoneInterest : '9.5 %',
    personalLoneInterest : '8.5 %',
    dueInterest : '3.5 %'
}

//for merge 
let sbiDetail = Object.assign({},sbiBank,bankLocation,rateOfInterest);
console.log(` SBI DETAILS ---> Bank name : ${sbiDetail.bankName} , Bank Manager : ${sbiDetail.branchManager} , Branch : ${sbiDetail.branch} , Contact : ${sbiDetail.contact} ,
Street : ${sbiDetail.street} , City : ${sbiDetail.city} , PIN : ${sbiDetail.pin} ,
Home Lone Interest : ${sbiDetail.homeLoneInterest} , Personal Lone Interes : ${sbiDetail.personalLoneInterest} , Due Interest : ${sbiDetail.dueInterest}`);

console.log(`-----------------------------Traverssing using for in loop---------------------------------`);

//for traavesing on object
for (const key in sbiDetail) {
    if (Object.hasOwnProperty.call(sbiDetail, key)) {
        const element = sbiDetail[key];
        console.log(`Keys : ${key} , Values : ${element}`);
        
    }
}