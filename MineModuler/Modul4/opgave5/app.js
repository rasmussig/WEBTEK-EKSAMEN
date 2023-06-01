let tekst = "Hej med dig";
console.log(tekst.length);                       // string længden
console.log(tekst.substring(4, 7));              //fra 4-7 i string
console.log(tekst.substring(8, 11));             //fra 8-11 i string
console.log(tekst.includes("med"));              //boolean resultat om string inkludere "med"
console.log(tekst.includes("banankage"));        //boolean resultat om string inkludere "banankage"
console.log(tekst.replace("dig", "banankage"));  //replace "dig" med "banankage"
console.log(tekst.replaceAll("e", "ø"));         //replace "e" med "ø"