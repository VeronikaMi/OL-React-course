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


//solution 
// const getTable = (row, col) => {
//   let table = [];
//   for(let Ri = 0; Ri < row; Ri++){
//     let rowResult = [];
//     for(let Ci = 0; Ci < col; Ci++){
//       rowResult.push(row * (Ci + 1) - (Ci % 2 ? Ri:row - Ri - 1));
//     }
//     table.push(rowResult);
//   }
//   return table;
// }

// console.log(getTable(row, col));
