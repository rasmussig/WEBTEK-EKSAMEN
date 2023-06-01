function udskrivTekstBesked(tekst) {
    if (tekst.includes("banankage")) {
      console.log("Det er lækkert");
    } else if (tekst.length > 50) {
      console.log("Det var en lang tekst");
    } else if (tekst.length < 10) {
      console.log("Det var en kort tekst");
    } else {
      console.log("ok");
    }
  }
  
  udskrivTekstBesked("Jeg elsker banankage"); // Output: Det er lækkert
  udskrivTekstBesked("Dette er en meget lang tekst, der overstiger 50 tegn"); // Output: Det var en lang tekst
  udskrivTekstBesked("Kort text"); // Output: Det var en kort tekst
  udskrivTekstBesked("Dette er en normal tekst"); // Output: ok