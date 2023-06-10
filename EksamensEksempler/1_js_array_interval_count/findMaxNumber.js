function findMaxNumber(a) {
    let max = a[0]; // Start med at antage, at det første tal er det største
  
    for (let i = 1; i < a.length; i++) {
      if (a[i] > max) {
        max = a[i]; // Hvis det aktuelle tal er større end det hidtil største, opdateres max-værdien
      }
    }
  
    return max;
  }
  
  const numbers = [10, 5, 8, 20, 3];
  const maxNumber = findMaxNumber(numbers);
  
  console.log("Det største tal i arrayet er: " + maxNumber);