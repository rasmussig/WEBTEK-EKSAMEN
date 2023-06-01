function erÆgteKvadrattal(tal) {
    // Finder kvadratroden af tallet og tjekker om det er et heltal
    let kvadratrod = Math.sqrt(tal);
    return Number.isInteger(kvadratrod);
}

console.log(erÆgteKvadrattal(121)); // Output: true
console.log(erÆgteKvadrattal(50)); // Output: false
console.log(erÆgteKvadrattal(16)); // Output: true
console.log(erÆgteKvadrattal(10)); // Output: false