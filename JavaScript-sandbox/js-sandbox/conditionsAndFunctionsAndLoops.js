const id = 100;

// EQUAL TO
if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO
if(id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

//its recommended to test VALUE & TYPE it decreases the errors

// EQUAL TO VALUE & TYPE
if(id === 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO VALUE & TYPE
if(id !== 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if(id <= 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// IF ELSE

const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// LOGICAL OPERATORS

const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

  /////////////////////////////////////////////////////////////////////////////////////////

  const color = 'yellow';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);

////////////////////////////////////////////////////////////////////////


// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') // defining the optional parameters (ES6)
{
    // checking if the this variables is set or not to avoid errors (optional parameters) (ES5)
    if(typeof firstName === 'undefined'){firstName = 'John'}
    if(typeof lastName === 'undefined'){lastName = 'Doe'}
    console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}
  
  // console.log(greet());
  
  // FUNCTION EXPRESSIONS = putting a function as variable assignment
  
  // usually the function is anonymous, but we could name it
  const square = function(x = 3){
    return x*x;
  };
  
  console.log(square());

/* 
*******************************************************
 notice the difference between function deceleration and function expression; the difference in the defining way
 ******************************************************
*/

  // IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs => is a function you declare and use it at the same time
  
  (function(){
    console.log('IIFE Ran..');
  })();
  
  (function(name){
    console.log('Hello '+ name);
  })('Brad');
  
  // PROPERTY METHODS
  
  const todo = {
    add: function(){
      console.log('Add todo..');
    },
    edit: function(id){
      console.log(`Edit todo ${id}`);
    }
  }
  
  todo.delete = function(){
    console.log('Delete todo...');
  }
  
  todo.add();
  todo.edit(22);
  todo.delete();

  ////////////////////////////////////////////////////////////////////////

  // FOR LOOP

for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue; // it will scape this value and continue to the next value
  }

  if(i === 5){
    console.log('Stop the loop');
    break; // break out of the loop
  }

  console.log('Number '+ i);
}

// WHILE LOOP

let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;
}

// DO WHILE

let i = 100;

do {
  console.log('Number ' + i);
  i++;
}while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// FOREACH it takes 3 param: iterator, index, array 
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP
const users  = [
  {id: 1, name:'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
    // x is the key, user[x] is the value of the key
  console.log(`${x} : ${user[x]}`);
}