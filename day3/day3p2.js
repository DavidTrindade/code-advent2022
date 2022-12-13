const fs = require('fs')

const findBadges = file => {
    const lines = fs.readFileSync(file, 'utf8').split(/\n/);
    lines.splice(lines.length - 1, 1)

    let groups = [];

    while (lines.length) {
        // Hopefully the length is divisible by 3, as it should be
        groups.push(lines.splice(0, 3))
    }

    return groups.reduce((p, c) => p + calculatePriority(findCommon(c)), 0)
}

const findCommon = arr => {
    // Using object lookup, the time should only be O(3n)
    const obj = {};

    for (let l of arr[0]) {
        obj[l] = 1;
    }

    for (let l of arr[1]) {
        if (obj[l] === 1) {
            obj[l]++;
        }
    }

    for (let l of arr[2]) {
        if (obj[l] === 2) {
            return l;
        }
    }
}

const calculatePriority = letter => {
    // Calculates priority depending on whether the letter is capitalised or not according to:
    // a-z: 1-26
    // A-Z: 27-52
    const ascii = letter.charCodeAt(0);
    return (ascii < 95) ? (ascii - 64 + 26) : (ascii - 96)
};


console.log(`The total priority was: ${findBadges('./input.txt')}`);