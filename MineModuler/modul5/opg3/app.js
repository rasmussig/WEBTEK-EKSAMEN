//OPG 3.1
function hej(navn) {
    return "hejsa, " + navn
}

console.log(hej("navn"));

//OPG 3.2
function KombinerForbogstav (str1, str2) {
    let forbogstav1 = str1.substring(0,1);
    let forbogstav2 = str2.substring(0,1);

    return forbogstav1 + forbogstav2;
}

console.log(KombinerForbogstav("kat","hund"));

//OPG 3.3
function ErTekstLængere(tal,tekst) {
return tekst.length > tal;
}

console.log(ErTekstLængere(2,"banankage"));
   