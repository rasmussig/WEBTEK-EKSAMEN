/* Skriv en funktion i JavaScript, som kan afgøre om et givet år er et skudår.

Funktionen skal have ét parameter:

year - årstallet som skal undersøges

Funktionen skal returnere true, hvis året er et skudår, og false, hvis det ikke er.

Husk at følge de regler, der definerer et skudår:

Et år, der er deleligt med 4, er et skudår.
Dog er et år, der er deleligt med 100, ikke et skudår.
Medmindre det er deleligt med 400 - så er det alligevel et skudår.
Prøv at implementere funktionen selv og se, om du kan afgøre, om et givet år er et skudår!

For at teste funktionen kan du kalde den med forskellige årstal og kontrollere, om det */

function erSkudaar (year) {
    if(year % 100 !== 0 && year % 4 === 0 || year % 400 === 0) {
        return true
    } else 
        return false
    } 

    console.log(erSkudaar(2020)); // Forventet output: True
    console.log(erSkudaar(2000)); // Forventet output: True
    console.log(erSkudaar(2004)); // Forventet output: True
    console.log(erSkudaar(2001)); // Forventet output: False