const fs = require('fs')

let max = -1;
let sum = 0;

for (cal of fs.readFileSync('./input.txt', 'utf8').split(/\n/)) {
    if (cal) {
        sum += Number(cal)
    } else {
        max = Math.max(max, sum)
        sum = 0;
    }
}

console.log(`Most calories being carried: ${max}`)