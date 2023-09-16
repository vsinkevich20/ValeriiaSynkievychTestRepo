function areAllUnique(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
}
console.log(areAllUnique([1,4,6,7]));
console.log(areAllUnique([3,5,7,7]));


function addIds(names) {
    const idMap = new Map();
    let id = 1;
    for (const name of names) {
        idMap.set(name, id);
        id++;
    }
}
console.log(addIds(["Alex", "Bob", "Peter", "Annie"]));



const obj = {
    a: 5,
    b: 2,
    add: function () {
        return this.a + this.b;
    },
    subtract: function () {
        return this.a - this.b;
    },
};


function checkMethodAvailability(funcName, object) {
    if (typeof object[funcName] === 'function') {
        return object[funcName]();
    } else {
        return "There is no such function in object";
    }
}
console.log(checkMethodAvailability("add", obj));
console.log(checkMethodAvailability("subtract", obj));
console.log(checkMethodAvailability("multiply", obj));


const obj1 = {
    a: 5,
    b: 2,
    add: function () {
        return this.a + this.b;
    },
    subtract: function () {
        return this.a - this.b;
    },
};

function inheritanceWithExpandedMethods(obj1) {

    const newObj = Object.create(obj1);
    newObj.multiply = function () {
        return this.a * this.b;
    };
    newObj.divide = function () {
        return this.a / this.b;
    };
    return newObj;
}
const newObj = inheritanceWithExpandedMethods(obj1);

console.log(newObj.multiply());
console.log(newObj.divide());
console.log(newObj.add());
console.log(newObj.subtract());