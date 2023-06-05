let dataset = [{ name: "Computer", weight: 1.4, price: 4300 },
                { name: "screen", weight: 4.2, price: 2000 },
                { name: "coffee machine", weight: 8.2, price: 5300 },
                { name: "chair", weight: 17.2, price: 3150 },
                { name: "light", weight: 1.8, price: 350 }];

for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].weight > 8) {
        console.info(dataset[i].name); // Udskriver navnet på de objekter, hvis vægt er større end 8
    }
}

function getItemsByMaxTotalWeight(data, maxTotalWeight) {
    let currentTotalWeight = 0; // Variabel til at holde styr på den aktuelle samlede vægt
    const result = []; // Array til at gemme de objekter, der opfylder kriteriet
  
    for (let i = 0; i < data.length; i++) {
        const currentItem = data[i];
        if (currentTotalWeight + currentItem.weight <= maxTotalWeight) {
            result.push(currentItem); // Tilføjer objektet til resultatet, hvis den aktuelle samlede vægt ikke overstiger maksimalvægten
            currentTotalWeight += currentItem.weight; // Opdaterer den aktuelle samlede vægt
        } else {
            break; // Stopper løkken, hvis den aktuelle samlede vægt overstiger maksimalvægten
        }
    }
  
    return result; // Returnerer resultatet af objekter, der opfylder kriteriet
}

console.log(getItemsByMaxTotalWeight(dataset, 6.0)); // Udskriver objekter med en samlet vægt højst 6.0
