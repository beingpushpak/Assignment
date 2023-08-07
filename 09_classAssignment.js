console.log(`----------------------------parr-1----------------------------`);
class Vehicle{
    constructor(name, model, color, milage, speed, feature, gears){
        this.name = name;
        this.model = model;
        this.color = color;
        this.milage = milage;
        this.speed = speed;
        this.feature = feature;
        this.gears = gears;
    }
}
let rangeRover = new Vehicle("Range Rover","N20","Black","25km/lit","250km/hr","Auto Pilote Mode",6);
console.table(rangeRover);

let scorpio = new Vehicle("Scorpio","S20","Red","27km/lit","180km/hr","Air Condition",5);
console.table(scorpio);

let verna = new Vehicle("Verna","HHH","Yellow","29km/lit","200km/hr","Air Bags",6);
console.table(verna);

let boolero = new Vehicle("Boolero","RRR","Red","28km/lit","180km/hr","Extra Space",5);
console.table(scorpio);

let bmw =new Vehicle("BMW","P99","Black","18km/lit","260km/hr","Air Suspention",7)
console.table(bmw);

const vehicleArray = [];
vehicleArray.push(rangeRover);
vehicleArray.push(scorpio);
vehicleArray.push(verna);
vehicleArray.push(boolero);
vehicleArray.push(bmw);

console.table(vehicleArray);

for (const cars of vehicleArray) {
    console.log(`Vehicle Name : ${cars.name} , Model : ${cars.model} , Color : ${cars.color} , Milage : ${cars.milage} , Speed : ${cars.speed} , Feature : ${cars.feature} , Gears : ${cars.gears}`);
}

console.log(`------------------------------part-2---------------------------`);
class College {
    constructor(name,stream,principal,contact,location){
        this.name = name;
        this.stream = stream;
        this.principal = principal;
        this.contact = contact;
        this.location = location;
    }
    display(){
        console.log(`Collage Name : ${this.name}  , Stream : ${this.stream} , Principal Name : ${this.principal} , Contact :${this.contact} , Location : ${this.location}`);
    }
}
let ssvm = new College("SSVM","Art","Chavan A.D","022-243575","Mahud B.k");
console.table(ssvm);

let vvmp = new College("VVMP","Commerce","Somdale A.s","022-223344","Pandharpur");
console.table(vvmp);

let kbp = new College("KBPC","Science","Jadhav J.J","022-23456","Pandharpur");
console.table(kbp);

let pndu = new College("PDU","Dental","Sharma D.P","022-265344","Kegaon");
console.table(pndu);

ssvm.display();
vvmp.display();
kbp.display();
pndu.display();
console.log(`--------------------------------------------------------`);
function traverseObject(college){
    for (const key in college) {
        if (Object.hasOwnProperty.call(college, key)) {
            const element = college[key];
            console.log(`keys : ${key} ; values : ${element}`);
        }
    }
}
traverseObject(ssvm);
console.log(`--------------------------------------------------------`);
traverseObject(vvmp);
console.log(`--------------------------------------------------------`);
traverseObject(kbp);
console.log(`--------------------------------------------------------`);
traverseObject(pndu);