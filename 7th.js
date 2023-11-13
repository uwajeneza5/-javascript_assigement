//7. Create a function that recieves an array and returns the smallest number from that array//
function findMinValue(arr) {
    if (arr.length === 0) {
        
        return undefined; 
    }

    return Math.min(...arr);
}

var myArray = [3, 8, 2, 10, 5];
var minValue = findMinValue(myArray);
console.log(minValue);
