function getSum(num1, num2) {
    return num1 + num2;
}
//console.log(getSum(5,8));
var mySum = function (x, y) {
    if (typeof y == 'string') {
        y = parseInt(y);
    }
    return x + y;
};
//console.log(mySum(7,'65'));
// ?: to make the param optional
function getName(firstName, lastName) {
    if (firstName == undefined) {
        return firstName;
    }
    return firstName + '' + lastName;
}
//console.log(getName('sf'));
/*function myVoid():void {
    return 4; // this is error
}*/
