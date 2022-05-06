
let actualNum = random(0, 14)
let numberOfTrials = 4;
while(numberOfTrials>=1){
   let guess = Number(prompt("Choose a number"));

   numberOfTrials--;
   if(guess > 14 || guess< 0) continue;
   if(guess == actualNum){
       console.log("You have won!")
       break;
   }
   else if(guess < actualNum){
       console.log("Your guess is less than the Answer😊");
   }
   else if(guess > actualNum){
       console.log("Your guess is greater than the number");
   }
   if(numberOfTrials < 1){
    console.log("The right ans is: ", actualNum)
   }
}


let row = 10;
let col = 10

function random(end){
    return Math.floor(Math.random()*(end+1))
}


function make2DArray(col, row){
    let arr = new Array(col);
    for(let i = 0; i<col; i++){
        arr[i] = new Array(row);
    }
    return arr;
}

function makeGrid(){
    let grid = make2DArray(col, row);
    for(let i = 0; i<col; i++){
        for(let j =0; j<row; j++){
            grid[i][j] = random(1);
        }
    }
  return grid;
}

console.table(makeGrid())

