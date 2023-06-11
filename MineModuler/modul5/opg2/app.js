//Lav en funktion der lægger summen af alle tal sammen som løber fra a til b. 
//Fx hvis a = 1 og b = 3, så er den samlede sum = 1 + 2 + 3 = 6. 

function sumTalrække(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++)
    sum = sum + i;  //eller ved brug af sum += i 
    return sum;  }
  console.log(sumTalrække(1,3)); // Skal udskrive 6
  console.log(sumTalrække(2,5)); // Skal udskrive 14