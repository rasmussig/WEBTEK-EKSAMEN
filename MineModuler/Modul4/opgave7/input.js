let tekst = process.argv[2]; // Input til programmet
if (tekst.includes("banankage")) {
    console.log("Det er lækkert");
}
if (tekst.length > 50) {
    console.log("Det var en lang tekst");
}
else if (tekst.length < 10) {
    console.log("Det var en kort tekst");
}
else {
    console.log("ok");
}

//Hvis du gerne vil printe et input med mellem rum i skal man bruge "her er min teskt"