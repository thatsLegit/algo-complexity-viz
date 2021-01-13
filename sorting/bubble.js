export function bubbleSort(array) {
    let sorted = false,
        counter = 0;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - counter; i++) {
            if (array[i + 1] < array[i]) {
                [array[i + 1], array[i]] = [array[i], array[i + 1]];
                sorted = false;
            };
        }
        counter++;
    }

    return array;
}