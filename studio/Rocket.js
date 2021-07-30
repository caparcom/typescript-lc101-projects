"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    };
    Rocket.prototype.currentMassKg = function () {
        return (this.sumMass(this.cargoItems) + (this.sumMass(this.astronauts)));
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
;
//TS2345 TS2551 Property 'addAstronaut' does not exist on type 'Rocket'
//When attempting to compile Index.ts into JS, following errors occur: index.ts:22:16 - error TS2551: Property 'addAstronaut' does not exist on type 'Rocket'. Did you mean 'astronauts'?
/*
22    if (falcon9.addAstronaut(astronaut)) {
    ~~~~~~~~~~~~

Rocket.ts:9:5
9     astronauts: Astronaut[];
~~~~~~~~~~
'astronauts' is declared here.

We have attempted: working with atronauts array,

will attempt to look at: astronaut class possible type error
SAM: review astronaut.ts
change astroanut to astronauts index.ts 22
they had less than 50 seconds to write Apollo 13
error is coming from somewhere else
unsaved


*/
/*Defined in Rocket.ts.
Properties:
name should be a string.
totalCapacityKg should be a number.
cargoItems should be an array of Cargo objects.
Should be initialized to an empty array []
astronauts should be an array of Astronaut objects.
Should be initialized to an empty array []
Constructor:
Parameter name should be a string.
Parameter totalCapacityKg should be a number.
Sets value of this.name and this.totalCapacityKg
Methods:
sumMass( items: Payload[] ): number
Returns the sum of all items using each item's massKg property
currentMassKg(): number
Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
canAdd(item: Payload): boolean
Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
addCargo(cargo: Cargo): boolean
Uses this.canAdd() to see if another item can be added.
If true, adds cargo to this.cargoItems and returns true.
If false, returns false.
addAstronaut(astronaut: Astronaut): boolean
Uses this.canAdd() to see if another astronaut can be added.
If true, adds astronaut to this.astronauts and returns true.
If false, returns false.*/
