function displayPattern() {
  const rows = 4;
  const cols = 4;

  for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = 0; j < cols; j++) {
      if (j < cols - i - 1) {
        row += '1 ';
      } else {
        row += '0 ';
      }
    }
    console.log(row);
  }
}

// Call the function to display the pattern
displayPattern();