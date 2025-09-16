// This is all about functions
// es5 and es6
// es5-> function statement , function expression , anonymous function
// es6 -> fat arrow function
// a) basic fat arrow function
// b) fat arrow function with single parameter
// c) fat arrow function with implicit return

function maggie(process) {
    console.log("pannin garam kero ...");
    console.log("maggie dallo ");
    console.log("masala dallo");
    console.log("maggie is ready to eat");
}
// maggie();
// maggie();

//functions with parameters
function maggie2(process, masala, time) {
    console.log("pannin garam kero ...");
    console.log("maggie dallo ");
    console.log(masala + " dallo");
    console.log("wait for " + time + " minutes");
    console.log("maggie is ready to eat");
}
maggie2("boiling", "tasty", 2);
maggie2("boiling", "chatpata", 3);

//function with arguments
function add(a, b) {
    console.log("addition is " + (a + b));
}
add(10, 20);
add(100, 200);
add(1000, 2000);

//function expression
var sub = function (a, b) {
    console.log("subtraction is " + (a - b));
}
sub(100, 50);


// anonymous function
setTimeout(function () {
    console.log("i am anonymous function");
}, 3000);
var b = function () {
    console.log("i am anonymous function");
}
b();


//fat arrow function
var multiply = (a, b) => {
    console.log("multiplication is " + (a * b));
}
multiply(10, 20);



//fat arrow function with single parameter
var square = a => {
    console.log("square is " + (a * a));
}
square(5);



//fat arrow function with implicit return
var divide = (a, b) => (a / b);
var result = divide(100, 5);
console.log("division is " + result);

//return keyword
function add2(a, b) {
    return (a + b);
}
console.log("addition is " + add2(50, 50));

var a = () => {
    return "hello";
}
console.log(a());


//Array loop 
var c = ["a", "b", "c", "d", "e"];
for (var i of c) {
    console.log(i);
}

var obj = {};
var obj2 = new Object();
console.log(typeof obj);
console.log(typeof obj2);