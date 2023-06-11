function vendStreng(str) {
    var omvendtStreng = "";
    for (var i = str.length - 1; i >= 0; i--) {
      omvendtStreng += str.charAt(i);
    }
    return omvendtStreng;
  }
  
  // Eksempel på brug
  var originalStreng = "Hej verden!";
  var vendtStreng = vendStreng(originalStreng);
  console.log(vendtStreng); // !nedrev jeH