// Math and math object

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4); // to round up
val = Math.floor(2.8); // to round down
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random(); // gives a random decimal

val = Math.floor(Math.random() * 20 + 1); // to get a random number (int) but between 1 and 20

console.log(val);


////////////////////////////////////////////////////////////////////////////////////

// String methods
const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice(), mostly used with arrays but you can use it with strings as well
val = firstName.slice(0,4);
val = firstName.slice(-3);// to start from the back and gives you the last 3 characters

// split(), split string into array based on separator
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes(), to test if the string you includes this value 
val = str.includes('foo');

console.log(val);


///////////////////////////////////////////////////////////////////////////////////////
// Template literals


const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

function hello(){
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;