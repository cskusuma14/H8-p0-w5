function changeVocals(str) {
  var result = "";

  var vocal = "aiueoAIUEO";
  var kamus = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < str.length; i++) {
    var count = 0;
    for (var j = 0; j < vocal.length; j++) {
      if (str[i] == vocal[j]) {
        for (var k = 0; k < kamus.length; k++) {
          if (vocal[j] == kamus[k]) {
            result += kamus[k + 1];
            count++;
            break;
          }
        }
      }
    }
    if (count == 0) result += str[i];
  }

  return result;
}

function reverseWord(str) {
  var reverseWord = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverseWord += str[i];
  }
  return reverseWord;
}

function setLowerUpperCase(str) {
  var kamusKecil = "abcdefghijklmnopqrstuvwxyz";
  var kamusBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var result = "";

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < kamusKecil.length; j++) {
      if (str[i] == kamusBesar[j]) {
        result += kamusKecil[j];
      }
      if (str[i] == kamusKecil[j]) {
        result += kamusBesar[j];
      }
    }
  }

  return result;
}

function removeSpaces(str) {
  var removeSpaces = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      removeSpaces += str[i];
    }
  }
  return removeSpaces;
}

function passwordGenerator(name) {
  var result = "";
  if (name.length <= 4)
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  else {
    result = setLowerUpperCase(changeVocals(reverseWord(removeSpaces(name))));
  }
  return result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
