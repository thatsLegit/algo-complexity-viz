export function insertionSort(array) {
    let currentValue;
    for (let i = 1; i < array.length; i++) {
        currentValue = array[i];
        for (let j = i - 1; currentValue < array[j]; j--) {
            [array[j + 1], array[j]] = [array[j], array[j + 1]];
        }
    }
    return array;
}