var fs = require("fs");
const content = fs.readFileSync('input.txt', 'utf8');

let arr1 = content.split("\n");
const str1 = arr1[0];
const str2 = arr1[1];
let result = 0;

for (let key = 0; key < str2.length; key += 1) {
	result = result + (str1.includes(str2[key]) ? 1 : 0);
}

fs.writeFileSync('output.txt', result + "")
