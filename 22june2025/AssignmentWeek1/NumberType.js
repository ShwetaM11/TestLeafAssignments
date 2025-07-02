function checkNumberType(num) {
  
  if (num > 0) {
    return "Number is Positive";
  } else if (num < 0) {
    return "Number is Negative";
  } else {
    return "Number is Zero";
  }
}


let digit = 0;

let Output = checkNumberType(digit);
console.log(Output);