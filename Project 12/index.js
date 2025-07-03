
const access_token=`XgshmnMg3w4xW2WeiWQZcp8mwlSKGEQVSdwDx1vnxGQ`

document.getElementById('btn').addEventListener('click', ()=>{
    document.getElementById('secondblock').innerHTML="";
    let keyword=document.getElementById('keyword');
    let val=keyword.value;
    fetchImage(val);
})
async function fetchImage(val){
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${access_token}`)
    let result = await response.json();
    displayImage(result);
}
function displayImage(res){
    res.results.map((data)=>{
        let div= document.createElement("div");
        div.setAttribute("class","card")
        div.innerHTML=`
        <div class="border w-xs flex flex-col p-1 gap-1 bg-white rounded-3xl">
                <div class="top flex justify-start items-center gap-3">
                    <img class="user_dp rounded-full h-10" src=${data.user.profile_image.large}>
                    <p class="user_name">${data.user.name}</p>
                </div>
                <div class="bottom flex flex-col justify-center items-center">
                    <img class="h-70 w-full rounded-3xl" src=${data.urls.raw}>
                    <p>Description</p>
                    <p class="p-1">${data.alt_description}</p>
                </div>
            </div>`
            document.getElementById('secondblock').appendChild(div);

    })
    
}
