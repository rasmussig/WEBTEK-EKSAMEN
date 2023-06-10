/*Skriv en funktion i Javascript, som kan tælle hvor mange tal fra 
et array, som er i et givet interval.

funktionen har tre parametre:

a - arrayet som indeholder tallene
minimum - nedre grænse i intervallet
maximum - øvre grænse i intervallet
Funktionen skal hedde countInInterval og returnere hvor mange af 
tallene i a som ligger mellem minimum og maximum (begge inklusiv).  
*/

function countInInterval(a, minimum, maximum) {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] >= minimum && a[i] <= maximum) {

            count++;
        }
    }
    return count;
}

const a = [2, 5, 8, 10, 15, 20];

const minimum = 5;
const maximum = 15;

const count = countInInterval(a, minimum, maximum); 

console.log(`Antal tal mellem ${minimum} og ${maximum} i arrayet er: ${count}`);
console.log((countInInterval([2, 5, 8, 10, 15, 20], 5, 15)))
