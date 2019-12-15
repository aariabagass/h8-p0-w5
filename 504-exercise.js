function totalDigitRekursif(angka) {
    var convert = String(angka)
    if (convert.length == 1) {
        return angka
    }
    else {
        return Number(convert[0]) + totalDigitRekursif(Number(convert.slice(1)))
    }
}
//TEST CASE
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5