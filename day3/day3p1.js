const fs = require('fs')

const findCommon = (arr1, arr2) => {
    const obj = {};

    for (let l of arr1) {
        obj[l] = true;
    }

    for (let l of arr2) {
        if (obj[l]) {
            return l
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

let yo = fs.readFileSync('./input.txt', 'utf8').split(/\n/).reduce((p, c) => {
    if (!c) return p;
    const c1 = c.slice(0, c.length / 2);
    const c2 = c.slice(c.length / 2, c.length);

    return p + calculatePriority(findCommon(c1, c2))
}, 0)
    

    

    


console.log(`Total priority was: ${yo}`)