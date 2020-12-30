//defining primitive data types
var myString;
var myNum;
var myBool;
var myVar; //can be any datatype i want
//defining arrays 1
var strArr; //to define an array of strings
var numArr; //to define an array of numbers
var boolArr; //to define an array of booleans
//defining arrays 2
var stArr;
var nuArr;
var boArr;
//defining tuple -> array with fixed number of elements
var strNumTuple;
//void -> can be null, undefined
var myVoid1 = null;
var myVoid2 = undefined;
var myVoid3 = null;
var myVoid4 = undefined;
myString = 'bla'.slice(0, 1) + ' ' + 'bla'.slice(0, 2);
myNum = 5 + 4;
myBool = false;
myVar = 45;
/*
strArr = ['hello', 5]; //error
numArr = ['as']; // error
*/
strNumTuple = ['hello', 4];
console.log(myString, myNum);
