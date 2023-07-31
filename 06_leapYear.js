console.log(`-------------------Assignment-3-----------------------`);
var leap = function(year){
    var deside = +year;
    if ( isNaN(deside) || deside==0) {
        console.log(`please enter valid data!!!`);
    } else if (year%4==0 &&  year%100!=0 || year%400==0) {
        console.log(`Year ${year} is a leap year`);
    } else{
        console.log(`Year ${year} is a Normal year`);
    }
}
leap(2020);
leap(1999);
leap(1600);
leap(2022);
leap(1945);
leap(null);
leap("twenty twenty");
leap(undefined);
leap(NaN);
leap(1750);
leap(2100);