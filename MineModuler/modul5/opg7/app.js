// Sum af array

function sumAfTal(array) {
    let sum = 0;
  
        for (let i = 0; i < array.length; i++)
        sum = sum + array[i];
        return sum;  }

  console.log(sumAfTal([1,2,3])); // Printer '6'