// create your loops here.
var i;
for (i = 0; i <= 9; i++) {
  console.log(i);
}

var number1 = 0;
var j;
for (j = 0; j <= 9; j++) {
  console.log(number1);
  number1 += 2;
}

var countDown = 'Time till explosion: ';
var number2 = 100;
var k;
for (k = 0; k < 100; k++) {
  console.log(countDown + number2 + '!');
  number2--;
}
