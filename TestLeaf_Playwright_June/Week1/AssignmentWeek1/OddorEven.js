function isOddOrEven(num) {
  if (num % 2 === 0) {
    return "Given number is even";
  } else {
    return "Given number is odd";
  }
}

let digit = 12;

let output = isOddOrEven(digit);
console.log(output);