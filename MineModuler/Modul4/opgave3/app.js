/* skabelon
for (let i = 0; i < 10; i++) {
    let output = "";
    for (let j = 0; j < 10; j++) {
      output = output + "*";
    }
    console.log(output);
  }
  */
 /* Opgave 3.1 
  for (let i = 0; i < 10; i++) {
    let output = "";
    for (let j = i; j < 10; j++) {
      output = output + "*";
    }
    console.log(output);
  } */
 /* opgave  3.2
  for (let i = 0; i < 10; i++) {
    let output = "";
    for (let j = 0; j < i + 1; j++) {
      output = output + "*";
    }
    console.log(output);
  } */
  
for (let i = 0; i < 10; i++) {
  let output = "";
  for (let j = 0; j < 10 - i; j++) {
    output = output + " ";
  }
  for (let j = 9 - i; j < 10; j++) {
    output = output + "*";
  }
  console.log(output);
}