function kaliTerusRekursif(angka) {
    var convert = String(angka)
    if (convert.length == 1) {
        return angka
    }
    var digit = 1
    for (i = 0; i < convert.length; i++) {
        digit = digit * convert[i]
    }
    return kaliTerusRekursif(digit)
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8 => 6*6=36, 3*6=18, 1*8=8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6