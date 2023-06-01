let frugter = ["banan", "pære", "æble", "appelsin", "vindrue"]

// opg 5.3 - Erstat det tredje element med en ny frugt.
console.log(frugter[2])
frugter[2] = "ananas"
console.log(frugter[2])

// opg 5.4 - Udskriv nu det samlede array i konsollen.
console.log(frugter)
// eller 
for (let frugt of frugter) {
    console.log(frugt)
}

//opg 5.5 - Lav et loop der erstatter alle frugter i arrayet med “banankage”.
for (let i = 0; i < frugter.length; i++) {
    frugter[i] = "banankage";
}
//opg 5.6 - udskriv det samlede array igen
console.log(frugter)

//opg 5.7 - Brug et loop til at tilføje 50 “rugbrød” til arrayet, uden at ændre på det eksisterende indhold.
for (let i = 0; i < 50; i++) {
    frugter.push("rugbrød");
}
//opg 5.8 udskriv hele arrayet igen
console.log(frugter)
// tjek hvor mange gange jeg har tilføjet "rugbrød"
console.log(frugter.length)