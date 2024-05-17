// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

function calculateDemeritPoint(speed){
    const speedLimit=70;
    const excessSpeed=speed - speedLimit;
    if(excessSpeed<=0){
        console.log("ok")
    }else{
        const demeritPoint=excessSpeed/5;
        console.log(demeritPoint)
        if(demeritPoint>12){
            console.log("License is suspended");
        }
    }
}
const speed=parseInt(prompt("Enter the speed of the car:"))
calculateDemeritPoint(speed);