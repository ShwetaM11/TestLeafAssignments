function gradeCal(marks){
    let grade;

    switch(true){

        case(marks>=85):
        grade = "A";
        break;

        case(marks>=75):
        grade = "B";
        break;

        case(marks>=65):
        grade = "C";
        break;

        case(marks>=55):
        grade = "D";
        break;

        case(marks>=45):
        grade = "E";
        break;

        default:
            grade='Fail'

    }
    return grade;
}

let givenMarks = 89;

let finalOutput = gradeCal(givenMarks);
console.log("Student's Grade is "+finalOutput);