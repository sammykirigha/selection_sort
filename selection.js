//given an array of n elements unsorted write a function that will sort the elements in ascending order
//[4,8,9,1,3,2,5,7,6,10] => [1,2,3,4,5,6,7,8,9,10]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr;
}

console.log(selectionSort([4, 8, 9, 1, 3, 2, 5, 7, 6, 10]))


//find two elements in array that add up to a given number
function sum(arr, num) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] == num) {
                return [arr[i],arr[j]]
            }
        }
    }
    return false
}

console.log(sum([2,7,4,6,8], 9))