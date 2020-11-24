
function displayNums(){
    let rows = $("#gameBoard").children();
    for(let i = 0; i < 9; i++){
        let boxes = rows[i].children;
        for(let j = 0; j < 9; j++){
            if(board[i][j] !== 0){
                boxes[j].innerHTML = "" + board[i][j];
                if(!isCliked){
                    boxes[j].onclick = null;
                    boxes[j].oncontextmenu = null;
                    boxes[j].onmousedown = null;
                }
            }else{
                boxes[j].innerHTML = "";
            }
        }
    }
}

function checkWin(){
    if(board == originBoard){
        alert("恭喜您成功解出数独！");
    }
}