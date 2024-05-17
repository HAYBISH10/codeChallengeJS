# Student Grade Calculator

This JavaScript function calculates the grade of a student based on their marks. It follows the standard grading system:

- A: 80 or above
- B: 60 to 79
- C: 50 to 59
- D: 40 to 49
- E: Below 40

## Usage

1. **calculateStudentGrade(marks)**: This function takes a numerical value representing the student's marks and returns their grade according to the grading system mentioned above.

    ```javascript
    function calculateStudentGrade(marks) {
        if (marks > 79) {
            return 'A';
        } else if (marks >= 60 && marks <= 79) {
            return 'B';
        } else if (marks >= 50 && marks <= 59) {
            return 'C';
        } else if (marks >= 40 && marks <= 49) {
            return 'D';
        } else if (marks < 40) {
            return 'E';
        }
    }
    ```

2. **Input Validation**: The script ensures that the input provided by the user is valid. It prompts the user to enter their marks between 0 and 100 and displays an error message for invalid inputs.

    ```javascript
    const studentMarks = prompt("Enter student marks (between 0 to 100)");

    if (!isNaN(studentMarks) && studentMarks <= 100 && studentMarks >= 0) {
        const grade = calculateStudentGrade(studentMarks);
        console.log(grade);
    } else {
        console.log("Invalid input, please input a number between 0 and 100");
    }
    ```

## Example

Suppose a student scores 85 marks. Calling the function with this value would return 'A', indicating an 'A' grade.

```javascript
const grade = calculateStudentGrade(85);
console.log(grade); // Output: 'A'
