// årstal - Det årstal du gerne vil tjekke.
// Return value: _true_ hvis årstallet er skudår, og ellers _false_.
function skudår(årstal) {
    // årstal % 4, tager rest af årstal/4, altså fx. 10/4, 4 kan kun deles med 10, 2 gange også er der 2 rest.
    // !== (Ikke lig med) altså rest(2) ikke lig med 0, return false, da årstallet så ikke kan deles med 4.
    if (årstal % 4 !== 0) { 
        return false;
    
    } else if (årstal % 100 !== 0) {
        return true;

    } else if (årstal % 400 !== 0) {
        return false;

    } else {
        return true;
    }
}

console.log(skudår(2020)); // Forventet output: True
console.log(skudår(2000)); // Forventet output: True
console.log(skudår(2004)); // Forventet output: True
console.log(skudår(2001)); // Forventet output: False