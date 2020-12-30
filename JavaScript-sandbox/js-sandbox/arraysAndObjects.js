// Arrays methods

// Create some arrays
const numbers = [43,56,33,23,44,36,5]; 
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS

// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take value from end
numbers.pop();
// Take value from front
numbers.shift();
// Splice values
numbers.splice(1,3); // first param where we want to start and second param where to end
// Reverse
numbers.reverse();

/*
*******************************************************
note that: all the arrays now mutated by the method you have used so if you want to see the correct result comment the methods before
*******************************************************
*/
// Concatenate array to array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort(); // in alphabetical order
val = numbers.sort(); // it will sort by the first number in the value not the whole number in the value

// to fix the last problem we use
// the "compare function"
val = numbers.sort(function(x, y){
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});

// Find
function over50(num){
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);


////////////////////////////////////////////////////////////////////////

// Object Literals
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
      city: 'Miami',
      state: 'FL'
    },
    getBirthYear: function(){
      return 2017 - this.age;// to use a property inside an object
    }
  }
  
  let val;
  
  val = person;
  // Get specific value
  val = person.firstName; // you can access the object attribute this way
  val = person['lastName'];// or this way
  val = person.age;
  val = person.hobbies[1];
  val = person.address.state;
  val = person.address['city'];
  val = person.getBirthYear();
  
  console.log(val);
  
  const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
  ];
  
  for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
  }
////////////////////////////////////////////////////////

// Date Object
  let val;

const today = new Date(); // if you didnt specify any date it will be the today's date
let birthday = new Date('9-10-1981 11:25:00');
// you cant redeclare the variable after declaring it by let once
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();// it will give you the number of the month in the year but notice that it will count from zero, Jan is 0, Feb is 1 ...etc
val = today.getDate();// the day in the month
val = today.getDay();// it will give you the number of the day in the week but notice that it will count from zero, Sun is 0, Mon is 1 ...etc
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);// the day in the month
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);