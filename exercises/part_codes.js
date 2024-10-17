const part1 = "ACME:123-L";
const part2 = "DI:12345-M";
const part3 = "ACE:1-12";

function getSupplier(part) {
  return part.split(".")[0];
}

function getProductNumber(part) {
  return part.split(":")[1].split("-")[0];
}

function getSize(part) {
  return part.split("-")[1];
}

console.log(
  `Part 1: Supplier = ${getSupplier(part1)}, Product Number = ${getProductNumber(part1)}, Size = ${getSize(part1)}`
);
console.log(
  `Part 2: Supplier = ${getSupplier(part2)}, Product Number = ${getProductNumber(part2)}, Size = ${getSize(part2)}`
);
console.log(
  `Part 3: Supplier = ${getSupplier(part3)}, Product Number = ${getProductNumber(part3)}, Size = ${getSize(part3)}`
);

"use strict";

const code1 = "ACME:123-L"; //the large (L) part 123 is supplied by ACME
const code2 = "DI:12345-M"; //the medium (M) part 12345 is supplied by DI
const code3 = "ACE:1-12"; //the size 12 part 1 is supplied by ACE

function getSupplier(code) {
  let positionOfColon = code.indexOf(":");
  let supplier = code.substring(0, positionOfColon);
  return supplier;
}

// let supplier = getSupplier(code1);
// console.log(supplier);
console.log(getSupplier(code1), getSupplier(code2), getSupplier(code3));

function getProductNumber(code) {
  let positionOfColon = code.indexOf(":");
  let positionOfHyphen = code.lastIndexOf("-");
  let productNumber = code.substring(positionOfColon + 1, positionOfHyphen);
  return productNumber;
}

// let productNumber = getProductNumber(code3);
// console.log(productNumber);

console.log(getProductNumber(code1), getProductNumber(code2), getProductNumber(code3));

function getSize(code) {
  let positionOfHyphen = code.lastIndexOf("-");
  let size = code.substring(positionOfHyphen + 1);
  return size;
}

// let size = getSize(code3);
// console.log(size);
console.log(getSize(code1), getSize(code2), getSize(code3));

console.log(`the (${getSize(code1)}) part ${getProductNumber(code1)} is supplied by ${getSupplier(code1)}`);