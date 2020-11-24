let board = [];

function initBoard(){
    for(let i = 0; i < 9; i++){
        board[i] = [];
        for(let j = 0; j < 9; j++){
            board[i][j] = j + 1;
        }
    }
}
