function setEvents(){
    document.onselectstart=function(){
        return false;
    }

    let rows = $("#gameBoard").children();
    for(let i = 0; i < 9; i++){
        let boxes = rows[i].children;
        for(let j = 0; j < 9; j++){
            boxes[j].onclick = function(){
                isCliked = true;
                if(this.innerHTML === ""){
                    board[i][j] = 1;
                }else{
                    board[i][j] = (parseInt(this.innerHTML) < 9) ? parseInt(this.innerHTML) + 1 : 1;
                }
                displayNums();
                checkWin();
                console.log(originBoard);
            }
            boxes[j].oncontextmenu = function(e){
                isCliked = true;
                e.preventDefault();
                if(this.innerHTML === ""){
                    board[i][j] = 9;
                }else{
                    board[i][j] = (parseInt(this.innerHTML) > 1) ? parseInt(this.innerHTML) - 1 : 9;
                }
                displayNums();
                checkWin();
            }
        }
    }
}