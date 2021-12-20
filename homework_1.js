let row = 4;
let col = 5;

//too many for cycles isnt good

const getTable = (row, col) => {
  let num = 0;
  let arr = new Array(row);
  for (let i = 0; i < row; i++) {
    arr[i] = [];
  }

  for (let i = 0; i < col; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < row; j++) {
        arr[j].push(++num);
      }
    }
    else {
      for (let j = row - 1; j >= 0; j--) {
        arr[j].push(++num);
      }
    }
  }

  return arr;
}

console.log(getTable(row, col));
