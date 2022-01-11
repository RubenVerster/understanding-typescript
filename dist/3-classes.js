"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    //shorthand method of initializing values
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //it's unnecessary to decalare variables as public since they are automaticall declared as public
        //declaring a readonly property says that the value of the property cannot be changed
        //private properties are only accessible in the class they are defined in, not classes that extend or inherit from that class
        //if you add the protected attribute to a property, it will be accessible in the class it is defined in and all classes that extend or inherit from that class
        //private id: string;
        //private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
        //
        //you cannot access the static methods from within the class constructor
        //this.createEmployee('Max');
        //if you want to access the static method, you need to use the class name
        //Department.createEmployee('Max');
    }
    //static methods allow you to access the class without instantiating it
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        //validation ets
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = 
        //the reason you actually use super is because it's basically a class in a class
        _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.addAdmin = function (admin) {
        this.admins.push(admin);
    };
    ITDepartment.prototype.printAdminInformation = function () {
        console.log(this.admins);
    };
    ITDepartment.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
//now we can access the static method that we defined in the class without instantiating it
var newEmployee = Department.createEmployee('Max');
var it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
//this wont be allowed, since you declared the method as private
//it.employees[2] = 'Anna';
it.describe();
it.printEmployeeInformation();
console.log(it);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    //by making the constructor private, you can't instantiate the class
    //a static method can be called on the class and you don't need to instantiate it
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        //a getter is a property that let's you execute function/method that allows you to access a private property or add more complex logic
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please ');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDepartment('d2', []);
            return this.instance;
        }
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
//this won't work because the constructor for this class is private
// const accounting = new AccountingDepartment('d2', []);
var accounting = AccountingDepartment.getInstance();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'test';
accounting.addReport('Something went wrong');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();
