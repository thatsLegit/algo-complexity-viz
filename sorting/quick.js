//The pivot function mutates the given array

function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start],
        swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }

    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
}

//In this precise implementation, the input array is mutated.
export function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right) //3
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return;
}
