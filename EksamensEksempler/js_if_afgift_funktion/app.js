function beregnAfgift(beløb) {
    if(beløb < 50000) {
        return 0;
    } else if (beløb >= 50000 && beløb <= 100000) {
        return (beløb - 50000) * 0.3;
    } else {
        return 15000 + (beløb - 100000) * 0.4;
    }

}

const beløb = 120000;
const afgift = beregnAfgift(beløb);
console.log(afgift); // Output: 23000
console.log(beregnAfgift(45000)) // Output: 0
console.log(beregnAfgift(55000)) // Output: 1500