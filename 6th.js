//6. Create a function that recieves an array and returns the greates value inside that array//
function findMaxValue(arr) {
    if (arr.length === 0) {
        
        return undefined; 
    }

    return Math.max(...arr);
}

var myArray = [3, 8, 2, 10, 5];
var maxValue = findMaxValue(myArray);
console.log(maxValue);