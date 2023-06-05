let dataset = [{ name: "Computer", weight: 1.4, price: 4300 },
                { name: "screen", weight: 4.2, price: 2000 },
                { name: "coffee machine", weight: 8.2, price: 5300 },
                { name: "chair", weight: 17.2, price: 3150 },
                { name: "light", weight: 1.8, price: 350 }];

for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].weight > 8) {
        console.info(dataset[i].name)
    }
}

function getItemsByMaxTotalWeight(data, maxTotalWeight) {
    let currentTotalWeight = 0;
    const result = [];
  
    for (let i = 0; i < data.length; i++) {
      const currentItem = data[i];
      if (currentTotalWeight + currentItem.weight <= maxTotalWeight) {
        result.push(currentItem);
        currentTotalWeight += currentItem.weight;
      } else {
        break;
      }
    }
  
    return result;
  }

  console.log(getItemsByMaxTotalWeight(dataset, 6.0))