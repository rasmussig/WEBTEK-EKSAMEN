console.log("\n----------------------------------------------------------");
console.log("Opgave 7;");
console.log("----------------------------------------------------------\n");

let tekst = process.argv[2]; // Input til programmet

if (tekst === "Banankage") {
    console.log("Det er lækkert")
} else if (tekst.length >= 50) {
    console.log("Det var en lang tekst")
} else if (tekst.length <= 10) {
    console.log("Det var en kort tekst")
} else {
    console.log("ok")
}