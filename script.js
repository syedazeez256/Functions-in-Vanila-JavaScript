"use strict";
// const bookings = [];

// const createBooking = function (flightNum, passangers, price) {
//   const booking = {
//     flightNum,
//     passangers,
//     price,
//   };

//   bookings.push(booking);
//   console.log(booking);
// };

// createBooking("A00pk", 5, 1900);

// const flight = "LH230";
// const azzy = {
//   name: "Azzy Shah",
//   passport: 2309876398,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH987";
//   console.log(flightNum);
//   passenger.name = "Mr" + passenger.name;
//   if (azzy.passport === 2309876398) alert("Checked In");
//   else alert("Wrong passport");
// };

// checkIn(flight, azzy);
// console.log(flight);
// console.log(azzy);

// const newPAss = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };
// newPAss(azzy);
// checkIn(newPAss, azzy);

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   console.log(first, others);
//   return [first.toUpperCase(), ...others].join(" ");
// };
// const transform = function (str, fn) {
//   console.log(`Original string:  ${str}`);
//   console.log(`Transformed with function:  ${fn(str)}`);
//   console.log(fn.name);
// };

// transform("Hello this is JavaScript", upperFirstWord);
// transform("Hello this is JavaScript", oneWord);
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const message = greet("hey");
// message("azeez");

// // with arrow function

// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const message1 = greetArr("hey");
// message1("Hamza");

const lufthansa = {
  airline: "lufthansa",
  iatacode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a flight of ${this.airline} with code ${this.iatacode}${flightNum}`
    );
    this.bookings.push(`${this.iatacode}${flightNum} , ${name}`);
  },
};

lufthansa.book(634, "azeez");
console.log(lufthansa);
const eurowings = {
  airline: "EuroWings",
  iatacode: "LK",
  bookings: [],
};

const Pia = {
  airline: "EuroWings",
  iatacode: "LK",
  bookings: [],
};
const book = lufthansa.book;

// does'nt work
// book(23, "ali");

book.call(Pia, 76, "Ig");

book.call(eurowings, 23, "Ali");
console.log(eurowings);

const flightData = [583, "Nabeel Anwar"];
book.apply(eurowings, flightData);

book.call(eurowings, ...flightData);

const bookEw = book.bind(eurowings);
bookEw(34, "Pakistan Air Line");
console.log(eurowings);

const bokkEw23 = book.bind(eurowings, 23);
bokkEw23("Jonas Shamadman");
bokkEw23("Kamran Ahmad");

lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};
lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 200));

const addVat = addTax.bind(null, 23);
console.log(addVat(100));

const addTAX = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const gre = addTAX(23);
// gre(20);
console.log(gre(20));
