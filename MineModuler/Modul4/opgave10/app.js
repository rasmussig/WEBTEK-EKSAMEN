// Noget JavaScript der gør det muligt at læse fra terminalen når der skrives.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// Noget JavaScript der læser et svar på et spørgsmål fra terminalen.
readline.question(`Hvad bliver næste terningekast? `, function(gæt) {
  console.log(`Du gætter på ${gæt}!`);

  // Kast terning: 
  let terning = Math.floor(Math.random() * 6 + 1);
  console.log(`Der blev kastet ${terning}!`);

  // TODO: Udskriv om spilleren gættede rigtigt eller forkert!
  if(parseInt(gæt) === terning) {
    console.log("Du gættede rigtigt! Sui");
  } else {
    console.log("Du gættede forkert, weak :(");
  }

  readline.close();
})