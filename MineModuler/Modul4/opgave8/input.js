/*opg 8.1: Et program der blot printer længden af inputtet som et tal.

let tekst = process.argv[2];
console.log(tekst.length);    

*/

/* opg 8.2: Et program der printer inputtet, men hvor alle forekomster af “kage” er erstattet med “rugbrød”.

let tekst = process.argv[2]; 
console.log(tekst.replace("kage", "rugbrød"));       
*/

/* opg. 8.3: Et program der printer hele output. Hvis output er mere end 50 tegn, printes kun de første 10 tegn.

let tekst = process.argv[2]; 

if (tekst.length > 50)
console.log(tekst.substring(0, 10));  
*/

// opg 8.4: Et program der enten printer “forbudt” eller “godkendt”. 
// Hvis inputteksten indeholder et ord fra følgende liste, skrives “forbudt”, eller skrives “godkendt”. Listen: “svin”, “hundehovede”, “skidespræller”, “skiderik”, “socialdemokrat”.
let tekst = process.argv[2]; 

if (tekst.includes("svin")) {
console.log("forbudt");  
}
else if (tekst.includes("hundehovder")) {
console.log("forbudt");  
}

else if (tekst.includes("skidespræller")) {
console.log("forbudt"); 
}

else if (tekst.includes("skiderik")) {
console.log("forbudt");
}

else if (tekst.includes("socialdemokrat")) {
console.log("forbudt"); 
}

else {
console.log("godkendt"); 
}




