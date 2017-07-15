'use strict';

function Mansion (footballFields) {
  this.Mansion = 'Mansion';
  this.footballFields = footballFields;
}

Mansion.prototype.countYards = function () {
  this.footballFields = this.footballFields * 100;
  console.log('Room for activities =  ', this.footballFields, ' yards');
  if (this.footballFields > 100) {
    console.log('How many yards you gon\' run for bruh?');
  }
};

var myMansion = new Mansion(11);
var yourMansion = new Mansion(0);
var drakesMansion = new Mansion(1);

myMansion.countYards();
yourMansion.countYards();
drakesMansion.countYards();

function Building (floors) {
  this.building = 'building';
  this.floors = floors;
}

Building.prototype.countFloors = function () {
  console.log('I have', this.floors, 'floors');
};

var myHouse = new Building(3);
var yourHouse = new Building(2);
var theOffice = new Building(12);

yourHouse.countFloors();
myHouse.countFloors();
theOffice.countFloors();

var Stack = function (capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function (value) {
  if (this.count < this.capacity) {
    this.storage[this.count++] = value;
    return this.count;
  }
  return 'too much man, stop it now';
};

Stack.prototype.pop = function() {
  var value = this.storage[--this.count];
  delete this.storage[this.count];
  }

};
// Stack.prototype.pop = function (val) {
//   var str = this.storage.slice(this.storage.lastIndexOf(':') + 1);
//   this.storage = this.storage.substring(0, this.storage.lastIndexOf(':'));
//   return str;
// };
//
// Stack.prototype.size = function (val) {
//   var count = 0;
//   for (var i = 0; i < val.length; i++) {
//     if (val[i] === ':') {
//       count++;
//     }
//   }
//   console.log(count);
// };

// Stack.prototype.capacity = function (capacity) {
//   console.log(this.storage.length);
//   if (capacity <= this.storage.length) {
//     console.log('cannot fit');
//   } else {
//     console.log(capacity);
//   }
// };

var myWeeklyMenu = new Stack(2);

myWeeklyMenu.push('RedBeans');
myWeeklyMenu.push('eatAninja');
myWeeklyMenu.push('lickitySPLIT');
console.log(myWeeklyMenu);
// myWeeklyMenu.pop();
// myWeeklyMenu.size(myWeeklyMenu.storage);
