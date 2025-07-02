//Function Declaration
function userProfile(name) {
  console.log(`Hello, ${name}!`);
}

userProfile("Shweta");

//Arrow Function
const double = (number) => number * 2;
console.log("Double of 10 is:", double(50));

//Anonymous Function with setTimeout
setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);

// Callback Function
function getUserData(callback) {
  
  setTimeout(() => {
    const user = {
      name: "Shweta Mehta",
      age: 29
    };
    callback(user); 
  }, 3000);
}

getUserData(function (user) {
  console.log("User's Name:", user.name);
  console.log("User's Age:", user.age);
});