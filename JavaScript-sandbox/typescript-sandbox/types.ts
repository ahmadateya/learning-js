//defining primitive data types
let myString : string;
let myNum : number;
let myBool : boolean;
let myVar : any; //can be any datatype i want

//defining arrays 1
let strArr: string[]; //to define an array of strings
let numArr: number[]; //to define an array of numbers
let boolArr: boolean[]; //to define an array of booleans

//defining arrays 2
let stArr: Array<string>;
let nuArr: Array<number>;
let boArr: Array<boolean>;

//defining tuple -> array with fixed number of elements
let strNumTuple: [string, number];

//void -> can be null, undefined
let myVoid1: void = null;
let myVoid2: void = undefined;
let myVoid3: null = null;
let myVoid4: undefined = undefined;

myString = 'bla'.slice(0,1)+ ' ' +'bla'.slice(0,2);
myNum = 5 +4;
myBool = false;
myVar = 45;

/*
strArr = ['hello', 5]; //error
numArr = ['as']; // error
*/

strNumTuple = ['hello', 4];

console.log(myString, myNum);
