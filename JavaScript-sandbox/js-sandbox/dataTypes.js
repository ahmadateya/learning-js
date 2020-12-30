console.table({name:ahmad, age:12}); // will form the object into table in the console
console.error('error'); // it makes it in the error format => colored red
console.warn('warning'); // it makes it in the warning format => colored yellow

console.time('hello');
// some code you want to calculate its time

console.timeEnd('hello');


//////////////////////////////////////////////////////////////////////////
// declaring variables
// var, let, const

// you can init variables without defining a value to it and it will be undefined

// can be letters, numbers, _, $
// $ not recommended
// cant start with number

var FirstName; // called Pascal Case, its recommended when making constructor in OOP

// var and let are identical in the global scope

const number = 1;
const person = {
    name: 'ahmad',
    age: 1
}
const array = [1,5,2,5];
// we cant reassign the const data 
//but if put an object or array to a const we can change the data inside the object or array itself, BUT we cant redeclare the object/array again

number = 44; // will make error
person.name = 'ali'; // will not make error
array.push = 4; // will not make error

///////////////////////////////////////////////////////////////////

// Data Types: Primitive types and Reference types

//  Primitive types when you access it you access it by its actual value and it stores in the Stack (memory one)


//  Reference types when you access it you access it by its reference and it stores in the Heap (memory one), ypu are having a pointer to its location in the memory

/* Primitive Types 6
* string
* number
* null
* undefined
* symbols (ES6)
*/


/* Reference Types 
* arrays
* object literals
* dates
* anything else
*/


// JS is dynamically typed language
/*
* types are associated with th values not variables
* the same variable can hold multiple types
* we dont need to specify types

* there are supersets of JS and addons to allow static typing (typescipt, flowjs) 
*/

const name = 'aaa';
console.log(typeof name); // typeof is an operator to know the datatype


const name = null;
console.log(typeof name); // it till you its object and this is a bug in javascript

const name; // you will get an error if you undefined constant

const sym = Symbol();
console.log(typeof sym); // will give you symbol

////////////////////////////////////////////////////////////////////

// type conversion
let val;

// you can use String Or .toString to convert your type to string
 val = String(22);
 val = String(4+5);
 val = String(true);
 val = String(new Date());
 val = String([1,15,5,5]);
val = val.toString();

console.log(val);
console.log(val.length); // length only works with strings

let val;
// you can use Number Or parseInt to convert your type to number
 val = Number('4');
 val = Number('hello'); // will give you NaN
 val = Number(true); // will give you one
 val = String(new Date());
 val = Number([1,15,5,5]); // will give you NaN
val = parseInt('100');
val = parseFloat('100');

console.log(val);
console.log(val.toFixed()); // toFixed() only works with numbers

const val1 = String(5);
const val2 = 6; // it will consider this as string
const sum = val1 + val2;

console.log(sum); // will print 56 as string
console.log(typeof sum);


////////////////////////////////////////////////////////////////////////
// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();

if(true) {
  // Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}

for(var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);