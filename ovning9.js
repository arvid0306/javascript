let myArray = ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4 ,5];

function reverseArray(myArray){
    let newArray = [];
    for(let symbol of myArray){
        newArray.unshift(symbol);
    }
    return newArray;
}

function reverseArrayInPlace(arrayValue){
    for(let i = 0; i < Math.floor((arrayValue.length) / 2); i++){
        let saved = arrayValue[i];
        arrayValue[i] = arrayValue[arrayValue.length - 1 - i];
        arrayValue[arrayValue.length - 1 - i] = saved;
    }
}


console.log(reverseArray(myArray));
console.log(myArray);

reverseArrayInPlace(arrayValue);
console.log(arrayValue);

