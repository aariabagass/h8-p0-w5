function sorting(arrNumber) {
    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = 0; j < arrNumber.length; j++) {
            if (arrNumber[j] > arrNumber[j + 1]) {
                let temp = arrNumber[j];
                arrNumber[j] = arrNumber[j + 1];
                arrNumber[j + 1] = temp;
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    if (arrNumber.length == 0) {
        return "''";
    }
    var muncul = 0
    for (j = 0; j < arrNumber.length; j++) {
        if (arrNumber[arrNumber.length - 1] == arrNumber[j]) {
            muncul++
        }
    }
    return `angka paling besar adalah ${arrNumber[arrNumber.length - 1]} dan jumlah kemunculan sebanyak ${muncul} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
//TEST CASE
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''