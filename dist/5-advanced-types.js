"use strict";
var e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
//type guards are a way to check if a variable is of a certain type without using unnecessary type checks
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ('privileges' in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo... " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
//here we can use the instance of type guard to conditionally call methods on the object
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
