"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing Vehicle and Wheel classes
const Vehicle_js_1 = __importDefault(require("./Vehicle.js"));
const Wheel_js_1 = __importDefault(require("./Wheel.js"));
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle_js_1.default {
    // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        if (wheels.length !== 2) {
            this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            this.wheels = wheels;
        }
    }
    ;
    // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // TODO: Override the printDetails method from the Vehicle class
    printDetails() {
        // TODO: The method should call the printDetails method of the parent class
        super.printDetails();
        // TODO: The method should log the details of the Motorbike
        // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.color}`);
        console.log(`Model: ${this.make}`);
        console.log(`Year: ${this.model}`);
        console.log(`Weight: ${this.year} lbs`);
        console.log(`Top Speed: ${this.weight} mph`);
    }
}
// Export the Motorbike class as the default export
exports.default = Motorbike;
