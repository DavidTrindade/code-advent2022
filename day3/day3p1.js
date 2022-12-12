const fs = require('fs')

let priority = 0;

for (line of fs.readFileSync('./input.txt', 'utf8').split(/\n/)) {
    if (!line) continue;
    const c1 = line.slice(0, line.length / 2);
    const c2 = line.slice(line.length / 2, line.length);

    const obj = {};
    let letter;

    for (let l of c1) {
        obj[l] = true;
    }

    for (let l of c2) {
        if (obj[l]) {
            letter = l;
            break;
        }
    }

    let ascii = letter.charCodeAt(0);
    priority += (ascii < 95) ? (ascii - 64 + 26) : (ascii - 96);

}

console.log(`Total priority was: ${priority}`)