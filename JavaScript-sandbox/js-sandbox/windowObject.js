// document -as well other things- is part from the window object
// window is a global object in JavaScript
// the window is the global environment for the client side, just like nodejs is the server side environment 

// WINDOW METHODS / OBJECTS / PROPERTIES

/* 
**********************************************************
    we can make window.alert() or window.console.log() because they are part of the window object but we dont need to make this because its very common
**********************************************************
*/

// Alert
alert('Hello World');

// Prompt
const input = prompt();
alert(input);

// Confirm
if(confirm('Are you sure')){
  console.log('YES');
} else {
  console.log('NO');
}

let val;

// Outer height and width; including the scroll bar
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width; 
val = window.innerHeight;//not including the scroll bar
val = window.innerWidth;// not including the dev menu down

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // to get the query parameters

// Redirect
window.location.href = 'http://google.com';
//Reload
window.location.reload();

// History Object; the browsing history
window.history.go(-2);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);