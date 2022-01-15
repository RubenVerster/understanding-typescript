type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//this is an Intersection Type - it combines two types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric = number | boolean;

//typesccript infers it as a number since it is used twice in the above types
type Universal = Combinable2 & Numeric;

//here we have a Type Guard to conditonally concatenate a string or add numbers together
function add(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

//type guards are a way to check if a variable is of a certain type without using unnecessary type checks
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ('privileges' in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ('startDate' in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

//here we can use the instancexof type guard to conditionally call methods on the object
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

//you can use typeof, the in operator or instance of to implement type guards

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'horse':
      speed = animal.runningSpeed;
      break;
    case 'bird':
      speed = animal.flyingSpeed;
      break;
  }
  console.log(`Moving at speed ${speed}`);
}

//type casting is when you need to explicitly tell the compiler that you know what type you want to cast to

//the bang operator at the end tells TS that you know that this value will exist
//you can cast the type of a variable like so
const userInputElement = <HTMLInputElement>(
  document.getElementById('user-input')!
);
//the more elagant way to do this is to use the as keyword
const userInputElement2 = document.getElementById(
  'user-input'
) as HTMLInputElement;

userInputElement.value = 'Hi there!';

//index properties are when yu know the type of data you will be receiving but you don't know the name of the property
//you can use Index Prroperties to access the properties of an array
//here we say we are going to recieve data that will have a value which is a string
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital letter',
};

//function overlaods are when you have the same function name but different parameters
//here we have two functions with the same name but different parameters
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

//optional chain is when you have a function that returns a value that might be undefined
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};
//here we check if the job property exists and if it does we access the title property
console.log(fetchedUserData?.job?.title);

//nullish coalescing operator is when you have a value that might be null or undefined, but you want to return a default value if it is
const userInput2 = null;
const storedData = userInput2 ?? 'DEFAULT';
