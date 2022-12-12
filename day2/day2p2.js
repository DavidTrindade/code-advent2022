const fs = require('fs')

const mod = (n, m) => ((n % m) + m) % m;

let score = 0;

for (strat of fs.readFileSync('./input.txt', 'utf8').split(/\n/)) {
    if (!strat) continue;

    let [opp, rec] = strat.split(' ');
    let m;

    opp = opp.charCodeAt(0) - 64;

    if (rec === 'Y') {
        // Draw
        score += 3;
        score += opp;
    } else if (rec === 'Z') {
        // Win
        score += 6;
        m = mod(opp + 1, 3);
    } else if (rec === 'X') {
        // Loss
        m = mod(opp + 2, 3);
    }
    
    if (m !== undefined) {
        score += m === 0 ? 3 : m;
    }
}

console.log(`The score was: ${score}`);