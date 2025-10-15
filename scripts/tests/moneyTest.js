import { formateCurrency } from "../utils/money.js";

console.log('Test suite: formateCurrency');
console.log("Converting cents to dollars");
if (formateCurrency(2095) === "20.95") {
    console.log("Test passed");
} else {
    console.log("Test failed");
}

console.log("work with zero cents");
if (formateCurrency(0) === "0.00") {
    console.log("Test passed");
} else {
    console.log("Test failed");
}

console.log("round up to the nearest cents");
if (formateCurrency(2000.5) === "20.01") {
    console.log("Test passed");
} else {
    console.log("Test failed");
}