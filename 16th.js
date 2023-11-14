function sortAndDisplayNumbers(numbers) {
  
  const sortedArray = numbers.sort((a, b) => a - b);

  
  const firstThree = sortedArray.slice(0, 3);


  const lastThree = sortedArray.slice(-3);

  
  const arrangedArray = lastThree.concat(sortedArray, firstThree);
  const firstThreeSorted = sortedArray.slice(0, 3);

  console.log("Original Array:", numbers);
  console.log("Sorted Array:", sortedArray);
  console.log("First 3 Numbers from Sorted Array:", firstThreeSorted);
  console.log("Modified Array:", arrangedArray);
}

var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
sortAndDisplayNumbers(someNumbers);
