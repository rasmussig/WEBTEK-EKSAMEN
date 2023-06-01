function sumAfLgd(data){
    let sum = 0;
    for (let i=0; i < data.length; i++) {
        sum += data[i].length;
    }
    return sum;
}

function getLongestString(data){
    let resultat = data[0];
    for (let i=1; i < data.length; i++)
       if (data[i].length >= resultat.length)
          resultat = data[i];
    return resultat;      
}

let testData = ["peter", "jensa", "mor", "ib"];

let resultat = getLongestString(testData);

console.info("Resultat " + resultat);