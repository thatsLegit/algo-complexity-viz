export function selectionSort(array) {
    let min = Infinity,
        minIndex;

    for (let i = array.length; i > 0; i--) {
        for (let j = array.length - i; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
            }
        }
        [array[array.length - i], array[minIndex]] = [array[minIndex], array[array.length - i]];
        min = Infinity;
    }

    return array;
}


console.log(selectionSort([3, 2, 6, 1, 9, 11, 7, 2, 10, 15]));