import { bubbleSort } from './sorting/bubble.js';
import { radixSort } from './sorting/radix.js';
import { quickSort } from './sorting/quick.js';
import { mergeSort } from './sorting/merge.js';
import { insertionSort } from './sorting/insertion.js';
import { selectionSort } from './sorting/selection.js';


let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['10^1', '10^2', '10^3', '10^4'],
        datasets: [
            {
                label: 'merge sort',
                borderColor: 'rgb(120, 100, 112)',
                data: dataGen(4, 'merge')
            },
            {
                label: 'quick sort',
                borderColor: 'rgb(180, 30, 10)',
                data: dataGen(4, 'quick')
            },
            {
                label: 'radix sort',
                borderColor: 'rgb(255, 13, 112)',
                data: dataGen(4, 'radix')
            },
            {
                label: 'bubble sort',
                borderColor: 'rgb(203, 20, 210)',
                data: dataGen(4, 'bubble')
            },
            {
                label: 'insertion sort',
                borderColor: 'rgb(50, 203, 210)',
                data: dataGen(4, 'insertion')
            },
            {
                label: 'selection sort',
                borderColor: 'rgb(1, 97, 132)',
                data: dataGen(4, 'selection')
            }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Time complexity of popular sorting algos'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'array size'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'miliseconds'
                }
            }]
        }
    }
});

function dataGen(power, algo) {
    //Stores time spent on each 10^power slice of the array
    let data = [];
    
    //generates an array with 10^power random integers ranging from 0 to 10^power :
    // const array = new Array(Math.pow(10, power))
    //     .fill(Math.random())
    //     .map(elem => Math.floor(Math.random() * elem * Math.pow(10, power)));

    //almost sorted :
    // const almostSortedArray = Array.from({length: Math.pow(10, power)}, (_, index) => index + 1);
    // [almostSortedArray[Math.ceil(Math.pow(10, power) / 2) + 1], almostSortedArray[Math.ceil(Math.pow(10, power) / 2)]] = [almostSortedArray[Math.ceil(Math.pow(10, power) / 2)], almostSortedArray[Math.ceil(Math.pow(10, power) / 2) + 1]];

    for (let i = 1; i <= power; i++) {
        //cut a slice of the array on each 10^power number of elements and record the time spent
        const subArray = almostSortedArray.slice(0, Math.pow(10, i));

        const t1 = performance.now();
        if (algo == 'bubble') bubbleSort(subArray);
        if (algo == 'radix') radixSort(subArray);
        if (algo == 'quick') quickSort(subArray);
        if (algo == 'merge') mergeSort(subArray);
        if (algo == 'insertion') insertionSort(subArray);
        if (algo == 'selection') selectionSort(subArray);
        const t2 = performance.now();

        //log10 for having better trends display
        data.push(Math.log10(t2 - t1));
    }

    return data;
}