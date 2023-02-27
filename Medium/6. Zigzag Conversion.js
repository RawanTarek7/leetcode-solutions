/**
 The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 (you may want to display this pattern in a fixed font for better legibility)
  */


function convert(s, numRows) {
    if (numRows === 1) return s;

    const rows = Array(numRows).fill('');
    let currRow = 0;
    let isGoingDown = false;

    for (let i = 0; i < s.length; i++) {
        rows[currRow] += s[i];
        if (currRow === 0 || currRow === numRows - 1) {
            isGoingDown = !isGoingDown;
        }
        currRow += isGoingDown ? 1 : -1;
    }

    return rows.join('');
}
