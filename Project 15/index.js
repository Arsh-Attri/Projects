let emoji=document.getElementById('emoji')
let result;
let desc=document.getElementById('desc');
async function fetchEmoji(){
    let resp= await fetch(`https://emoji-api.com/emojis?access_key=45b7ecffdfc3ab409e6891412ef936564f43b9e9`);
    result= await resp.json();
    return result[randomNumber].character;
}
fetchEmoji()
emoji.addEventListener('click', async ()=>{
    let randomNumber=Math.floor(Math.random()*result.length);
    let randomEmoji=result[randomNumber].character;
    emoji.innerHTML=`${randomEmoji}`
    let randomDesc=result[randomNumber].unicodeName;
    desc.innerHTML=`${randomDesc}`
})
