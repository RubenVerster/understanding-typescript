abstract class Department {
  //it's unnecessary to decalare variables as public since they are automaticall declared as public
  //declaring a readonly property says that the value of the property cannot be changed
  //private properties are only accessible in the class they are defined in, not classes that extend or inherit from that class
  //if you add the protected attribute to a property, it will be accessible in the class it is defined in and all classes that extend or inherit from that class

  //private id: string;
  //private name: string;
  protected employees: string[] = [];

  static fiscalYear = 2020;

  //shorthand method of initializing values
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    //
    //you cannot access the static methods from within the class constructor
    //this.createEmployee('Max');
    //if you want to access the static method, you need to use the class name
    //Department.createEmployee('Max');
  }

  //static methods allow you to access the class without instantiating it
  static createEmployee(name: string) {
    return { name: name };
  }

  //by adding abstract, you can force all classes that inherit from this class to implement the method
  //if one method in the class is abstract, you have to make the class abstract as well
  //if a method is abstract, you must only type the return value of the method and not the method itself
  //all classes that extend off of an abstract class must implement the method
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    //validation ets
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    //the reason you actually use super is because it's basically a class in a class
    super(id, 'IT');
    this.admins = admins;
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
  }

  printAdminInformation() {
    console.log(this.admins);
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

//now we can access the static method that we defined in the class without instantiating it
const newEmployee = Department.createEmployee('Max');

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');
//this wont be allowed, since you declared the method as private
//it.employees[2] = 'Anna';

it.describe();
it.printEmployeeInformation();

console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string | undefined;
  private static instance: AccountingDepartment;

  //a getter is a property that let's you execute function/method that allows you to access a private property or add more complex logic
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please ');
    }
    this.addReport(value);
  }

  //by making the constructor private, you can't instantiate the class
  //a static method can be called on the class and you don't need to instantiate it
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new AccountingDepartment('d2', []);
      return this.instance;
    }
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

//this won't work because the constructor for this class is private
// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'test';

accounting.addReport('Something went wrong');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();
