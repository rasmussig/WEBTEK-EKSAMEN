/*Skriv en funktion i Javascript som kan beregne afgiften af et 
beløb efter følgende regler:

Hvis beløbet er mindre end 50000, er afgiften 0. 
Hvis beløbet er fra 50000 og til 100000 betales 30% af det som overstiger 50000. 
Endelig hvis beløbet er fra 100000, betales 15000 plus 40% af det som overstiger 100000.

Funktionen tager en parameter som er beløbet og skal returnere afgiften.

*/
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