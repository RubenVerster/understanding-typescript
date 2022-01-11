//here we create an interface that describes the shape of a person
interface Person {
  name: string;
  age: number;
  //we can also add optional properties such as functions, but you must define what they return
  greet: (phrase: string) => void;
}

//here we create a class that implements the Person interface
let user1: Person;

user1 = {
  name: 'Max',
  age: 30,

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi there - I am');

//you can also create an interface that will be extended from by another interface
//you can also add optional properties
//just remember to do if checks to see if the optional properties are defined
interface Named {
  readonly name?: string;
  outPutName?: string;
}

//you can also create an interface for a class that is based off of an interface, but you can extend upon it
interface Greetable extends Named {
  greet2(phrase: string): void;
}

//here is a class that implements the Greetable interface, but is also extended with more properties
class PersonClass implements Greetable {
  name?: string;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }
  greet2(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    }
  }
}

//now it is optional to initiate the class with a name
const user2: Greetable = new PersonClass('Max');
user2.greet2('Hi there - I am');
console.log(user2);

//you can also create interfaces for functions, since functions are also objects
interface addFunc {
  (num1: number, num2: number): number;
}

let add2: addFunc;

add2 = (n1: number, n2: number) => {
  return n1 + n2;
};

//interfaces cannot be compiled down to JS, so TS interfaces are used as a safeguard against errors during development

let coworkers = ['me'];



console.log(coworkers);
