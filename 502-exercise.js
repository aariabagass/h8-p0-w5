function changeVocals(str) {
    var ubah = ''
    for (i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            ubah += 'b'
        } else if (str[i] == 'i') {
            ubah += 'j'
        } else if (str[i] == 'u') {
            ubah += 'v'
        } else if (str[i] == 'e') {
            ubah += 'f'
        } else if (str[i] == 'o') {
            ubah += 'p'
        } else if (str[i] == 'A') {
            ubah += 'B'
        } else if (str[i] == 'I') {
            ubah += 'J'
        } else if (str[i] == 'U') {
            ubah += 'V'
        } else if (str[i] == 'E') {
            ubah += 'F'
        } else if (str[i] == 'O') {
            ubah += 'P'
        } else {
            ubah += str[i]
        }
    }
    return ubah
}

function reverseWord(str) {
    var balik = ''
    for (i = str.length - 1; i >= 0; i--) {
        balik += str[i]
    }
    return balik
}

function setLowerUpperCase(str) {
    var becil = ''
    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            becil += str[i].toUpperCase()
        }
        if (str[i] == str[i].toUpperCase()) {
            becil += str[i].toLowerCase()
        }
    }
    return becil
}

function removeSpaces(str) {
    var spasi = ''
    for (i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            spasi += str[i]
        }
    }
    return spasi
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
    }
}
//TEST CASE
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
