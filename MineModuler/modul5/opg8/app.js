//opg 8.1 
function SumLængdeTekst(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) { 
        sum += array[i].length;

    }
    return sum;
}

let frugter = ["banan", "æble", "pære", "melon"]
console.log(SumLængdeTekst(frugter));

//opg 8.2
function SætArraySammen(array) {
    let nytArray = [...arr1, ...arr2];
    // ... er en spread oprator, betyder altså, at alle elementerne fra arr1 og arr2 er spredt ud som individuelle elementer i et nyt array.
    return nytArray 
}

let arr1 = [1,2,3]
let arr2 = [4,5,6]
console.log(SætArraySammen(arr1,arr2))

//opg 8.3
function PlusArray() {
    let result = []; 
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
//looper indtil arr1's længde  med attributten .length, opg ligger de 2 tal sammen for hvert element. 
//Resultatet tilføjes til result-arrayet ved hjælp af .push
}
return result;
}
console.log(PlusArray(arr1,arr2))

//opg 8.4 

function findLængsteTekst(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    return longest;
  }
  const strings = ["foo", "bar", "bazqux", "quux"];
  console.log(findLængsteTekst(strings));