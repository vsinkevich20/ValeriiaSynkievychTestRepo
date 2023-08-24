

function stringToArray(str) {
    const arrayOfStrings = str.split(/\s+/);
    return arrayOfStrings;
}

const str = "Це довільний текст для створення масиву слів ";
const resultArray = stringToArray(str)
console.log(resultArray)
