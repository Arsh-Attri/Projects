async function fetchUser(userId){
    let response = await fetch(`https://api.github.com/users/${userId}`)
    let result= await response.json();
    displayUser(result.avatar_url, result.name, result.bio, result.followers, result.following, result.public_repos, result.html_url)
}
function displayUser(dp, name, bio, followers, following, repo, visit){
    if(!dp){
        document.getElementById('userProfile').innerHTML=`<h1>User Not Found</h1>`;
        return;
    }
    if(!bio){
        bio=``;
    }
    document.getElementById('userProfile').innerHTML=`
    <div class="userInfo flex flex-col justify-center items-center">
                <img  class="rounded-full h-50" src="${dp}" alt="">
                <div class="flex flex-col justify-center items-center">
                    <p>${name}</p>
                    <p>${bio}</p>
                </div>
            </div>
            <div class="userFollow flex flex-col justify-center items-center gap-6">
                <div class="flex  gap-7">
                    <div class="flex flex-col justify-center items-center">
                        <p>Followers</p>
                        <p>${followers}</p>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p>Following</p>
                        <p>${following}</p>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p>Repo</p>
                        <p>${repo}</p>
                    </div>
                </div>
                    <a href="${visit}" target='_blank'>
                        <button class="bg-blue-300 p-1 border rounded-xl cursor-pointer">Visit Profile</button>
                    </a>
                </div>
            </div>
        `

}
document.getElementById('btn1').addEventListener('click', (e)=>{
    let input=document.getElementById('userId')
    let userId=input.value
    fetchUser(userId)
})