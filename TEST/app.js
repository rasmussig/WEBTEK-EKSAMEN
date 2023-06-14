function HejNavn(navn) {
    return "Hejsa, " + navn
};

console.log(HejNavn("Rasmus"))

function Forbogstav(str1, str2) {
    let forbogstav1 = str1.substring(0,1) 
    let forbogstav2 = str2.substring(0,1)

    return forbogstav1 + forbogstav2
}

console.log(Forbogstav("kat","hund"))

function længere(tal,tekst) {
    if (tal < tekst.length) {
        return true
    } else {
        return false
    }
}

console.log(længere(4,"hunde"))


    for (let i=1; i <= 20; i++) {
    console.log(i*i)
    }

// årstal - Det årstal du gerne vil tjekke.
// Return value: _true_ hvis årstallet er skudår, og ellers _false_.
function skudår(årstal) {
    if(årstal % 4 !== 0) {
        return false
    } else if (årstal % 100 !== 0) {
        return true
    } else if (årstal % 400 !==0) {
        return false
    } else {
        return true
    }
  }

  console.log(skudår(2020));
  console.log(skudår(2000));
  console.log(skudår(2004));
  console.log(skudår(2001));


let frugter = ["banan","pære","æble","appelsin","vindure"]

console.log(frugter[2])
frugter[2] =  "ananas"
console.log(frugter[2])
console.log(frugter)


for (let i = 0; i < frugter.length; i++) {
    frugter[i]  = "banankage"
}

console.log(frugter)

for (let i = 0; i < 50; i++) {
    frugter.push("rugbrød")
}
console.log(frugter)


// Laver en kopi af et array
let tal = [1,2,3,4]
console.log(tal.length)

function lavArrayKopi(array) {
    let nytArray = []; // Det nye array er tomt
  
    // Vi looper over alle gamle elementer
    for (let i = array.length - 1 ; i >= 0; i--) {
      // Indsæt et gammelt element i det nye array
      nytArray.push(array[i]);
    }
  
    return nytArray; // Returner det nye array
  }

  console.log(lavArrayKopi(tal))

// --------------------------------

  function sumAfTal(array) {
    let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
  
    return sum;
  }
  
  console.log(sumAfTal([1,2,3,4])); // Printer '6'

// ------------------------------------

function arraytekst(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].length;
    }
    return sum
}

console.log(arraytekst(["Hej","kat","hund"]))

// -------------------------------------
function lægarraysammen (a1,a2) {
    return newarr = [...a1, ...a2]
}

let array1 = [1,2,3,4]
let array2 = [4,5,6,8]
console.log(lægarraysammen(array1,array2))

//------------------------------------
function lægtalsammen(a1,a2) {
    let newarr = [];
    for (let i = 0; i < a1.length; i++) {
        push
    }
}

//------
function findLængsteTekst(array) {
    let længsteobjekt = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > længsteobjekt.length) {
            længsteobjekt = array[i] 
        }
    }
    return længsteobjekt
}

console.log(findLængsteTekst(["hej","klamme","mand"]))