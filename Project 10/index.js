const ticTac =document.querySelector('.tictac')
const boxes = document.querySelectorAll(".box")
let winingCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let currentplayer = "X";
ticTac.addEventListener('click', (e)=>{
    if(e.target.className != "tictac")
    {
        if(e.target.innerText =="")
        {
            e.target.textContent=currentplayer;
            winner();
            currentplayer= currentplayer == "X" ? "O" : "X";
        }
    }
    

})
function winner(){
    winingCondition.forEach((item) =>{
        let index0=item[0] //0
        let index1=item[1] //1
        let index2=item[2] //2
        let val0=boxes[index0]
        let val1=boxes[index1]
        let val2=boxes[index2]
        console.log()
    })
}