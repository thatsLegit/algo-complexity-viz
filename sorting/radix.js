const getDigit = (num, pos) => {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
};

//Works on neg numbers too, counts the number of digits in a number
const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1; //Ex: log10(423) will give us 2.xx, floor it + 1 = 3
}

//counts the max number of digits in an array of numbers
const mostDigits = (arr) => {
    let maxDigits = 0;

    arr.forEach(element => {
        maxDigits = Math.max(maxDigits, digitCount(element));
    });

    return maxDigits;
}


export function radixSort(array) {
    const largest = mostDigits(array);
    let newArray = [...array];

    for (let i = 0; i < largest; i++) { //k    
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < array.length; j++) {  //n
            buckets[getDigit(newArray[j], i)].push(newArray[j]);
        }
        newArray = [].concat(...buckets);
    }

    return newArray;
}