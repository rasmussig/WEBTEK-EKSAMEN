// Noget JavaScript der gør det muligt at læse fra terminalen når der skrives.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// Funktion der returnerer forskellen mellem to tal.
function forskel(a, b) {
    return Math.abs(a - b);
}

// Spiller 1 gætter.
readline.question(`Spiller 1: Hvad bliver næste terningekast? `, function (gæt1) {
    console.log(`Spiller 1 gætter på ${gæt1}!`);

    // Spiller 2 gætter.
    readline.question(`Spiller 2: Hvad bliver næste terningekast? `, function (gæt2) {
        console.log(`Spiller 2 gætter på ${gæt2}!`);

        // Kast terning (HER KAN MAN ÆNDRE PÅ SIDERNE AF TERNINGEN): 
        let terning = Math.floor(Math.random() * 12 + 1);
        console.log(`Der blev kastet ${terning}!`);

        // Udregn forskellen mellem spillernes gæt og det faktiske terningekast.
        let forskel1 = forskel(gæt1, terning);
        let forskel2 = forskel(gæt2, terning);

        // Find vinderen og udskriv resultatet.
        if (forskel1 < forskel2) {
            console.log("Spiller 1 vinder! SUI");
        } else if (forskel2 < forskel1) {
            console.log("Spiller 2 vinder! SUI");
        } else {
            console.log("Det er uafgjort!");
        }
        readline.close();
    });
  });