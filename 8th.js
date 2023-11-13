function calculateAverage(arr) {
    if (arr.length === 0) {
        
        return undefined; 
    }

    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / arr.length;

    return average;
}
var myArray = [3, 8, 2, 10, 5];
var averageValue = calculateAverage(myArray);
console.log(averageValue);