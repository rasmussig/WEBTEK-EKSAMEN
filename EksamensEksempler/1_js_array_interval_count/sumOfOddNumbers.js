function calculateSumOfOddNumbers(a) {
    let sum = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] % 2 !== 0) { // Tjekker om tallet er ulige
        sum += a[i]; // Lægger tallet til summen
      }
    }
  
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sumOfOddNumbers = calculateSumOfOddNumbers(numbers);
  
  console.log("Summen af alle ulige tal er: " + sumOfOddNumbers);