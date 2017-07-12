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

var Stack = function () {
  this.storage = '';
};

Stack.prototype.push = function (val) {
  this.storage = this.storage.concat(':', val);
};

Stack.prototype.pop = function (val) {
  var str = this.storage.slice(this.storage.lastIndexOf(':') + 1);
  this.storage = this.storage.substring(0, this.storage.lastIndexOf(':'));
  return str;
};

Stack.prototype.size = function (val) {
  var count = 0;
  for (var i = 0; i < val.length; i++) {
    if (val[i] === ':') {
      count++;
    }
  }
  console.log(count);
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');
myWeeklyMenu.push('eatAninja');
myWeeklyMenu.push('lickitySPLIT');
myWeeklyMenu.pop();
myWeeklyMenu.size(myWeeklyMenu.storage);
