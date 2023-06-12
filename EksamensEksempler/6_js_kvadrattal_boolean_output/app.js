function erÆgteKvadrattal(tal) {
    // Finder kvadratroden af tallet og tjekker om det er et heltal
    let kvadratrod = Math.sqrt(tal);
    return Number.isInteger(kvadratrod);
}


//Kan også laves sådan
function kvardttal(tal) {
    let x = Math.sqrt(tal);
    if (x % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(erÆgteKvadrattal(121)); // Output: true
console.log(erÆgteKvadrattal(50)); // Output: false
console.log(erÆgteKvadrattal(16)); // Output: true
console.log(erÆgteKvadrattal(10)); // Output: false

console.log(kvardttal(121)); // Output: true
console.log(kvardttal(50)); // Output: false
console.log(kvardttal(16)); // Output: true
console.log(kvardttal(10)); // Output: false