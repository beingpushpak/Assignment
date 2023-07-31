console.log(`------------------------Assignment-1---------------------------`);
function monthOfYear(month){
    switch (month) {
        case 1:
            console.log(`${month} is January`);
            break;
        case 2:
            console.log(`${month} is February`);
            break;
        case 3:
            console.log(`${month} is March`);
            break;
        case 4:
            console.log(`${month} is April`);
            break;
        case 5:
            console.log(`${month} is May`);
            break;   
        case 6:
            console.log(`${month} is June`);
            break;
        case 7:
            console.log(`${month} is July`);
            break;
        case 8:
            console.log(`${month} is August`);
            break;
        case 9:
            console.log(`${month} is September`);
            break;
        case 10:
            console.log(`${month} is Octomber`);
            break;    
        case 11:
            console.log(`${month} is November`);
            break;
        case 12:
            console.log(`${month} is December`);
            break;
        default:
            console.log(`Please enter valid data!!!!`);
            break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(15);
monthOfYear(100);
monthOfYear(12);
monthOfYear(null);
monthOfYear(undefined);