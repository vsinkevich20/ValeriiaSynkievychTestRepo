//1 task
function stringToArray(str) {
    const text = str.match(/\S+/g);
    const sortedText = text.sort();
    return sortedText;
}
const str = " Це довільний текст для створення масиву слів a э";
const result = stringToArray(str);
console.log(result);

//2 task
const _ = require('lodash');

function removeDuplicatesAndSort(arr) {
    const uniqueSortedArray = _.sortedUniq(arr);

    return uniqueSortedArray;
}

const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
const result2 = removeDuplicatesAndSort(initialArray);
console.log(result2);

//3 task
const initialArray2 = [2, 3, 6, 7, 9, 12];

function arrayOfEvens(arr) {
    const evenNumbers = arr.filter(number => number % 2 === 0);
    return evenNumbers;
}

const evenNumbersArray = arrayOfEvens(initialArray2);
console.log(evenNumbersArray);

//4 task

function createArray(element) {
    const resultArray = [];
    let currentValue = element;
    while (currentValue <= 30) {
        resultArray.push(currentValue);
        currentValue += element;
    }
    return resultArray;
}

console.log(createArray(5));
console.log(createArray(3))







