var fs = require("fs");
const content = fs.readFileSync('input.txt', 'utf8');

let arr = content.split(" ")
fs.writeFileSync('output.txt', Number.parseFloat(arr[0]) + Number.parseFloat(arr[1]) + "")
