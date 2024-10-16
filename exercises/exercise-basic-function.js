function greet() {
  return "Hello,World!";
}
console.log(greet());

function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(10, 5));

function isEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(isEven(4));
console.log(isEven(7));
