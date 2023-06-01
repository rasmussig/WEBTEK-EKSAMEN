// parseInt har til formål at lave en tekst om til et heltal
let tal1 = parseInt(process.argv[2]); // Input tal 1
let tal2 = parseInt(process.argv[3]); // Input tal 2
console.log(tal1, tal2); // Udskriver begge input-tal

// opg 9.1: Et program der printer enten “tal1 er størst” eller “tal2 er størst”.
if (tal1 > tal2) {
    console.log("tal1 er størst");
}

else if (tal2 > tal1) {
    console.log("tal2 er størst");
}

//opg 9.2 Et program der udskriver summen af de to input-tal.
const sum = tal1 + tal2
console.log(`Summen af ${tal1} og ${tal2} er ${sum}.`);

//opg 9.3 Et program der via et loop udskriver alle tal fra tal1 til tal2.
if (tal2 < tal1) {
    const temp = tal1;
    tal1 = tal2;
    tal2 = temp;
  }

  for (let i = tal1; i <= tal2; i++) {
    console.log(i);
  }

  //opg 9.4 Et program der udskriver 5 tal, startende med tal1, men hvor intervallet imellem tallene er lig med tal2. Fx giver node app.js 0 5 outputtet 0 5 10 15 20.
  for (let i = 0; i < 5; i++) {
    console.log(tal1 + i * tal2);
  }