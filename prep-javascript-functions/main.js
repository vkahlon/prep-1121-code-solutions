function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log(sum);

function convertHoursToMinutes(hours) {
  return 60 * hours;
}

var hourConversion = convertHoursToMinutes(2);
console.log(hourConversion);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greet = getGreeting('World');
console.log(greet);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addMultiply = addAndMultiplyBy5(10, 5);
console.log(addMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiDivide = multiplyAndDivideBy5(35, 10);
console.log(multiDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwo = subtractTwoNumbers(22, 7);
console.log(subtractTwo);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circleCirc = getCircleCircumference(5);
console.log(circleCirc);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number ** 3;
}
var getCube = cube(5);
console.log(getCube);
