function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// Example usage with 4 rows and 5 columns:
displayPattern(4, 5);