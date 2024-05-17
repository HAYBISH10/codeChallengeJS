// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

//         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


function calculateStudentGrade(marks){
    if(marks>79){
        return 'A'
    }else if(marks>=60 && marks <= 79){
        return 'B'
    }else if(marks>=49 && marks <= 59){
        return 'C'
    }else if(marks>=40 && marks <= 49){
        return 'D'
    }else if(marks<40){
        return 'E'
    }
}

const studentMarks=prompt("Enter student marks (between 0 to 100)")
if(!isNaN(studentMarks)&& studentMarks<=100 && studentMarks>=0){
    const grade=calculateStudentGrade(studentMarks)
    console.log(grade)
}else{
    console.log("Invalid input, please input a number between 0 and 100")
}