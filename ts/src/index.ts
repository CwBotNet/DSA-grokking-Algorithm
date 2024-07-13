import { binarySeach } from "./algorithms";

const arr = [1, 2, 3, 4, 5, 6, 7, 8]; // small arr

const arraySize = 240000;
const largeArray = Array.from({ length: arraySize }, (_, index) => index + 1); // large arr

const target = 20000;
const result = binarySeach(largeArray, target);
console.log(result);
