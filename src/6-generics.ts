//generics are used to create reusable code that can be used in multiple situations
const names: Array<string> = [];
//TS will then still be able to infer the type of the array and provide a type guard to check if the array contains a string
names[0].split(' ');

//generics allow us to get additional type information
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  //using type generics, TS will warn us because we typed the promise as a number
  // data.split(' ')
  data.toExponential();
});

//these are all built in generics

//you can also create your own custom generics

//using custom generics allows you to create interfaces for objects, that might not be the same type
//constraints are used to specify the type of the data you want to use
//this provides you with type security when you are using generics
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
