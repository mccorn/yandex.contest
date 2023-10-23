var fs = require("fs");
const content = fs.readFileSync('input.txt', 'utf8');

let arr1 = content.split("")
let arr2 = content.split("")

console.log(arr1, arr2);
fs.writeFileSync('output.txt', Number.parseFloat(arr[0]) + Number.parseFloat(arr[1]) + "")
