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
        labels: ['10^1', '10^2', '10^3', '10^4', '10^5', '10^6', '10^7'],
        datasets: [
            {
                label: 'merge sort',
                borderColor: 'rgb(120, 100, 112)',
                data: dataGen(7, 'merge')
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
    let data = [];
    //generates an array with n random integers ranging from 0 to n.
    const array = new Array(Math.pow(10, power)).fill(Math.random()).map(elem => Math.floor(Math.random() * elem * Math.pow(10, power)));

    for (let i = 1; i <= power; i++) {
        const subArray = array.slice(0, Math.pow(10, i));

        const t1 = performance.now();
        if (algo == 'bubble') bubbleSort(subArray);
        if (algo == 'radix') radixSort(subArray);
        if (algo == 'quick') quickSort(subArray);
        if (algo == 'merge') mergeSort(subArray);
        if (algo == 'insertion') insertionSort(subArray);
        if (algo == 'selection') selectionSort(subArray);
        const t2 = performance.now();

        data.push(t2 - t1);
    }

    return data;
}