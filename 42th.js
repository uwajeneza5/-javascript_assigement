function removeLastElement(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  } else {
    arr.pop();
    return arr;
  }
}
const myArray = [1, 2, 3, 4, 5];
const newArray = removeLastElement(myArray);
console.log(newArray); 
