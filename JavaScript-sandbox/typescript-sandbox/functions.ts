function getSum(num1: number, num2: number):number {
    return num1 + num2;
}
//console.log(getSum(5,8));

let mySum = function (x:number, y:any):number {
    if (typeof y== 'string'){
        y = parseInt(y);
    }
        return x + y;
}
//console.log(mySum(7,'65'));

// ?: to make the param optional
function getName(firstName:string, lastName?:string):string {
    if (firstName == undefined){
        return firstName;
    }
    return firstName+''+lastName;
}
//console.log(getName('sf'));

/*function myVoid():void {
    return 4; // this is error
}*/
