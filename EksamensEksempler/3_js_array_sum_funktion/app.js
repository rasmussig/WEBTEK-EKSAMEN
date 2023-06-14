function sum(a) {
    let resultat = 0;
    for (let i = 0; i < a.length; i++)
         resultat += a[i];
    return resultat;
 }

 const a = [1,2,3,4,5]
 const resultat = sum(a)
 console.log(resultat) // Printer 15

console.log(sum([1,2,3])) // Printer 6