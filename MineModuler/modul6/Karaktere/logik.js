function sum(data) {
   let resultat = 0;
   for (let i = 0; i < data.length; i++)
      resultat += data[i];
   return resultat;
}

function average(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++)
      sum += numbers[i];
   return sum / numbers.length;
}

//Test at min average funktion virker
let tal = [10, 12, 12, 7, 7]
console.log(average(tal))


