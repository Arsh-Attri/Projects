const API_key="b58c8e2a01d3b762ee7302240c1786e8";
const keyword= document.getElementById('keyword');

document.getElementById('btn').addEventListener('click', async ()=>{
    try{
        let result= await fetchData(keyword.value);
        DisplayData(result);
    }catch(err){
        document.getElementById('seconDiv').innerHTML=`<h1 class="bold text-5xl">${err.message}</h1>`
    }
    
    
})
async function fetchData(cityname){
    
    let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}&units=metric`)
    let res= await resp.json();
    if (!resp.ok || res.cod !== 200) {
        throw new Error(res.message); // message is "city not found"
    }

    return res;
}
function DisplayData({main, name, wind}){
    div = `<div id="weatherInfo" class="flex flex-col justify-center items-center gap-7">
                <p class="bold text-7xl">${main.temp}°C</p>
                <p>${name}</p>
                <div class="flex justify-center items-center gap-11">
                    <div  class="flex flex-col justify-center items-center">
                        <p>Wind</p>
                        <p>${wind.speed}Km/h</p>
                    </div>
                    <div  class="flex flex-col justify-center items-center">
                        <p>Pressure</p>
                        <p>${main.pressure}</p>
                    </div>
                    <div  class="flex flex-col justify-center items-center">
                        <p>Hummidity</p>
                        <p>${main.humidity}%</p>
                    </div>
                    
                    
                    

                </div>

            </div>`
    document.getElementById('seconDiv').innerHTML= div 
            
        
}
document.getElementById('ctr').addEventListener('click', ()=>{
    
})
