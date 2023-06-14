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
console.log(SumLængdeTekst(["kat","hej","hund"]))


//TJEK MODUL 5 for array opgaver
