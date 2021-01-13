//The merge function doesn't mutate the entered array

const merge = (arr1, arr2) => {
    let i = 0,
        j = 0,
        res = 0,
        output = [];

    while (i < arr1.length && j < arr2.length) {
        res = arr1[i] - arr2[j];
        if (res > 0) {
            output.push(arr2[j]);
            j++;
        } else {
            output.push(arr1[i]);
            i++;
        }
    }

    if (arr1.length === i) {
        output = [...output, ...arr2.slice(j)];
    } else {
        output = [...output, ...arr1.slice(i)];
    }

    return output;
}

export function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    return merge(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2))));
}