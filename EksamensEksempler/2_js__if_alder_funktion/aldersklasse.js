/*Skriv en funktion i Javascript som kan returnere aldersklassen ud fra alderen. 

Funktionen har en parameter - alder. Hvis alder er under 3, skal funktionen returnere "Vuggestue". 
Hvis alder er fra 3 til under 6, skal funktionen returnere "Børnehave". 
Hvis alder er fra 6 til under 16, skal den returnere "Skole". 
Endelig, hvis alder er fra 16, skal der returneres "Voksen".

Hvordan vil du teste om funktionen er korrekt? */

function aldersklassen (alder) {
if (alder < 3) {
  return "Vuggestue";
} else if (alder >= 3 && alder < 6) {
  return "Børnehave";
} else if (alder >= 6 && alder < 16) {
  return "Skole";
} else if (alder >= 16) {
  return "Voksen";
}
}

console.info(aldersklassen(1)); // Forventet resultat: "Vuggestue"
console.info(aldersklassen(5)); // Forventet resultat: "Børnehave"
console.info(aldersklassen(6)); // Forventet resultat: "Skole"
console.info(aldersklassen(20)); // Forventet resultat: "Voksen"