/*

*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?

 */
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

Stack.prototype.pop = function () {
  var value = this.storage[--this.count]; // eslint-disable-line
  delete this.storage[this.count];
  if (this.count < 0) {
    this.count = 0;
  }
  return value;
};

Stack.prototype.peek = function () {
  return this.storage[this.count - 1];
};
// Time complexity:

Stack.prototype.count = function() {
  // implement me...
};
// Time complexity:

/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */

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
