"use strict";
//here we define a function that accepts 4 parameters
//two of them have to be of type number
//one parameter that is of type boolean
//and one parameter that is of type string
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
//since TS infers the type when you initialize variables, you do not have to type them
//it is considered bad practice
//however, if you initialize a variable, but you do not define it, it is expected of you to type the variable
var undefinedNum;
var number1 = 5;
var number2 = 2.7;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
//tuples is a fixed length array that you define with set types for each item inside the array
//enums are used to define variables, but are given a number instead
//eg, instead of having the below:
//const ADMIN = 0
//const AUTHOR = 1
//const READ_ONLY = 2
//you can have an enum to profide that functionality, eg:
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
//best practice to name your custom types, or enums with a capital
//the any type tells TS that the variable you are declaring can have any value
//try to avoid using any in your applications
//here we define an object that has three properties
//name of type string
//age of type number
//sexy of type boolean
//hobbies of type array consisting of strings
//role which is a tuple and the first item is of type number and the second item is of type string
//access of type number which is accessed from the declared Role enum
//wildcard of type any
//you do key/type pairs when you type an object
var person = {
    name: 'Ruben',
    age: 25,
    sexy: true,
    hobbies: ['legos', 'motorbikes'],
    role: [0, 'author'],
    access: Role.ADMIN,
    wildcard: '0',
};
if (person.access === Role.ADMIN) {
    console.log('This user is an Admin');
}
function combine(input1, input2, 
//literal types
resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log("Combining numbers:", combine(30, 26, 'as-number'));
console.log("Combining strings:", combine('Ruben', 'Verster', 'as-text'));
// examples of simplifying codes with unions and literal types:
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greetFunc(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlderFunc(user, checkAge) {
    return checkAge > user.age;
}
//in TS, you can define what a function will return
//define what the function is returning by typing it after the parameters it receives
//here it is not necessary, since TS infers the type of what the functional will return, therefore it is not needed
function addFunc(n1, n2) {
    return n1 + n2;
}
//since this function does not return any data, you type the value as void
function printResultFunc(num) {
    console.log(num);
}
//function types are used when we want to define variables that are functions
//here we define a variable that accepts a function as an argument
//we are telling TS that the function that is going to be stored in this variable can only accept two parameters and must return a variable that is a number type
var combineValues;
//TS will not complain here, since addFunc matches all the types we have defined when we declared and type the combineValues variable
combineValues = addFunc;
//you can also type callback functions that you use within a function
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
//unknown is a type that you can use when you don't know what the type is of a variable you intend of using
//it is a bit safer than using the type any, since it provides some type checking
var userInput;
var userName;
userInput = 5;
if (typeof userInput === 'string') {
    userName = userInput;
}
//never is another type that functions can return
//using the never function type declaration in error throwing functions is the best example
//since the function never returns anything, since an error is thrown, you can use never to type the function
//an infinte loop would also be a good example of a never function
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('These are not the strings you are looking for', 404);
