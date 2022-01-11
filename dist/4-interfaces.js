"use strict";
//here we create a class that implements the Person interface
var user1;
user1 = {
    name: 'Max',
    age: 30,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('Hi there - I am');
//here is a class that implements the Greetable interface, but is also extended with more properties
var PersonClass = /** @class */ (function () {
    function PersonClass(name) {
        if (name) {
            this.name = name;
        }
    }
    PersonClass.prototype.greet2 = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
    };
    return PersonClass;
}());
//now it is optional to initiate the class with a name
var user2 = new PersonClass('Max');
user2.greet2('Hi there - I am');
console.log(user2);
var add2;
add2 = function (n1, n2) {
    return n1 + n2;
};
//interfaces cannot be compiled down to JS, so TS interfaces are used as a safeguard against errors during development
var coworkers = ['me'];
coworkers.push('Liezel', 'Kevin');
console.log(coworkers);
