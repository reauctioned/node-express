//sync methods

const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync('./content/text1.txt');
// const second = readFileSync('./content/test.txt');
const third = readFileSync("test3.txt", "utf-8");

console.log(third);

// console.log(first, second);

writeFileSync("./content/subfolder/result.txt", "Here is the result");
