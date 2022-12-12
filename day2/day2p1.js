const fs = require('fs')

const mod = (n, m) => ((n % m) + m) % m;

let score = 0;

for (strat of fs.readFileSync('./input.txt', 'utf8').split(/\n/)) {
    if (!strat) continue;

    let [opp, rec] = strat.split(' ');
    
    opp = opp.charCodeAt(0) - 64;
    rec = rec.charCodeAt(0) - 87;

    score += rec;

    // As long as the order remains next beats current, this modulo operation will work
    let m = mod(rec - opp, 3);

    if (m === 0) {
        // Draw
        score += 3;
    } else if (m === 1) {
        // Win
        score += 6;
    }
}

console.log(`The score was: ${score}`);
