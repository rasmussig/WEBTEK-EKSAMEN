let dataset = [{ name: "peter", height: 165 },
{ name: "hans", height: 172 },
{ name: "jens", height: 183 },
{ name: "thomas", height: 172 },
{ name: "anders", height: 174 }];

/* a) Skriv en stump kode som udskriver (vha. console.info) navnene på de personer i dataset, hvis højde er større 
end 170. Kodestumpen skal laves vha. en løkke, således at hvis dataset ændres, vil den stadig virke 
(dvs. udskrive navnene på de personer, hvis højde er større end 170. */

for(let i = 0; i < dataset.length; i++) {
    if(dataset[i].height > 170) {
        console.log(dataset[i].name)
    }
} 

/*b) Skriv en funktion i Javascript med tre parametre. Den første parameter vil være et datasæt med samme 
struktur som ovenstående dataset. Dvs. det er et array af objekter, hvor hvert objekt har et name og height som 
attributter. De to andre parametre angiver et interval. Funktionen skal have følgende signatur: */

function getPersonNamesInInterval(data, min, max) {
    let names = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].height >= min && data[i].height <= max) {
            names.push(data[i].name);
        }
    }

    return names;
}

let result = getPersonNamesInInterval(dataset, 170, 175);
console.log(result);