function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        var temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
};


function binarySearch(array, item) {
    var low = 0;
    var high = array.length - 1;

    while (low <= high) {
        var middle = Math.floor((low + high) / 2);
        var guess = array[middle];
        if (guess === item) {
            return middle;
        }
        if (guess > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return -1
}
console.log(selectionSort([1, 10, 99, 34, 55, 3, 021]))
console.log(binarySearch([3, 4, 35, 97, 32, 8, 71], 4));
