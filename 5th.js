//5. Create a function that recieves an array and return the sum of all the elements inside that array//
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage:
var myArray = [1, 2, 3, 4, 5];
var result = sumArray(myArray);
console.log(result);

