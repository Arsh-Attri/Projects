const btn=document.getElementById("genPass")
const newPass=document.getElementById("newPass")
const slider=document.getElementById("range")
const rangeVal=document.getElementById("rangeVal")

const upprCase=document.getElementById("capLet")
const lwrCase=document.getElementById("smalLet")
const num=document.getElementById("number")
const symbol=document.getElementById("symbol")


rangeVal.innerText=slider.value;

slider.addEventListener('input', (e) => {
    rangeVal.innerText=e.target.value
})
btn.addEventListener('click', ()=>{
    let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetter = "abcdefghijklmnopqrstuvwxyz";
    let numberStr = "0123456789";
    let symbolsStr = "~`!@#$%^&*()_+}{";
    let finalStr="";
    if(upprCase.checked)
    {
        finalStr=finalStr+capitalLetter;
    }
    if(lwrCase.checked)
    {
        finalStr=finalStr+smallLetter;
    }
    if(num.checked)
    {
        finalStr=finalStr+numberStr;
    }
    if(symbol.checked)
    {
        finalStr=finalStr+symbolsStr;
    }
    let latestPass="";
    for(let i=0; i<slider.value; i++)
    {
        let rand=Math.floor(Math.random()*finalStr.length);
        latestPass=latestPass+finalStr.charAt(rand);
    }
    newPass.innerText=`${latestPass}`;
})