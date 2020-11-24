let board = [[],[],[],[],[],[],[],[],[]];
let isCliked = false;

let originBoard = [
    [9, 7, 8, 3, 1, 2, 6, 4, 5],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [5, 6, 4, 8, 9, 7, 2, 3, 1]
]

function generateArray(){
    let arr = [];

    for(let i = 0; i < 9; i++){
        let num;
        while(true) {
            num = Math.floor(Math.random() * 9 + 1);
            if (!arr.includes(num)) {
                arr.push(num);
                break;
            }
        }
    }
    console.log(arr);

    return arr;
}

function generateSudoku(){
    let randomArray = generateArray();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            for (let k = 0; k < 9; k++) {
                if (originBoard[i][j] === randomArray[k]) {
                    originBoard[i][j] = randomArray[(k + 1) % 9];
                    break;
                }
            }
        }
    }
    console.log(originBoard);
}

function digBoxes(){
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            board[i].push(originBoard[i][j]);
        }
    }
    console.log(board);
    let count = 0;
    while(count < 55){
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        if(board[row][col] !== 0){
            board[row][col] = 0;
            count++;
        }
    }
}

function newGame(){
    generateSudoku();
    digBoxes();
    setEvents();
    displayNums();
}