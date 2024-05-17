# Demerit Point Calculator

This JavaScript function calculates demerit points based on the speed of a car exceeding the speed limit. It assumes a standard speed limit of 70.

## Usage

1. **calculateDemeritPoint(speed)**: This function takes the speed of the car as input and calculates demerit points based on the excess speed over the speed limit. If the speed is within the limit, it logs "ok". If the speed exceeds the limit, it calculates demerit points. If the demerit points exceed 12, it logs "License is suspended".

    ```javascript
    function calculateDemeritPoint(speed) {
        const speedLimit = 70;
        const excessSpeed = speed - speedLimit;
        
        if (excessSpeed <= 0) {
            console.log("ok");
        } else {
            const demeritPoint = excessSpeed / 5;
            console.log(demeritPoint);
            
            if (demeritPoint > 12) {
                console.log("License is suspended");
            }
        }
    }
    ```

2. **Input Validation**: The script prompts the user to enter the speed of the car and ensures the input is a valid integer.

    ```javascript
    const speed = parseInt(prompt("Enter the speed of the car:"));
    calculateDemeritPoint(speed);
    ```

## Example

Suppose a car is traveling at a speed of 90 km/h in a 70 km/h zone. Calling the function with this speed would result in demerit points being calculated and logged.

```javascript
calculateDemeritPoint(90);
// Output:
// 4
