console.log(`---------------------------Assignment-2---------------------------`);
function gradeCalculation(marks){
    var nan = +marks;
    if (marks<=0 || isNaN(nan) || marks>100) {
        console.log(`Please provide the valid marks!!!`);
    } else if (marks>=90) {
        console.log(`Fantastic marks : ${marks} your grade is A+`);
    } else if (marks>=75 && marks<90) {
        console.log(`Exellente marks : ${marks} your grade is A`);
    } else if (marks>=50 && marks<75) {
        console.log(`Good marks : ${marks} your grade is B`);
    } else if (marks>=35 && marks<50) {
        console.log(`Marks : ${marks} your grade is C , you need improvement`);
    } else if (marks>0 && marks<35) {
        console.log(`Marks : ${marks} you Fail !!!!`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);