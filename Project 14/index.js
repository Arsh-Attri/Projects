let keyword=document.getElementById('inp')
/*
function removeToDo(id){
    let div=document.getElementById(id);
    div.remove()
}
function markToDo(id){
    let div=document.getElementById(id);
    let h2=div.querySelector("h2");
    h2.classList.toggle('completed')
    
}
let id=1;


document.getElementById('btn1').addEventListener('click', ()=>{
    
    let addtodo=keyword.value;
    let div=document.createElement("div")
    div.setAttribute("class", "singleTodo")
    div.setAttribute("id", id)
    div.innerHTML=`<div class="flex gap-5">
                <h2 class="bold text-xl">${addtodo}</h2>
                <input type="checkbox" name="" id="" onclick=markToDo(${id})>
                <button class="border" onclick=removeToDo(${id})>Remove Todo</button>
            </div>`
            id++;
    document.getElementById('secondDiv').appendChild(div);
    keyword.value="";
})
*/
let data=JSON.parse(localStorage.getItem('storage')) || []
function displayToDo(){
    data.map((singleToDo)=>{
          let div=document.createElement("div")
    div.setAttribute("class", "singleTodo")
    
    div.innerHTML=`<div class="flex gap-5">
                <h2 class="bold text-xl">${singleToDo}</h2>
                <input type="checkbox" name="">
                <button class="border">Remove Todo</button>
            </div>`
    document.getElementById('secondDiv').appendChild(div);
    
        
    })
}

document.getElementById('btn1').addEventListener('click', ()=>{
    
    let addtodo=keyword.value;
    data.push(addtodo);
    let div=document.createElement("div")
    div.setAttribute("class", "singleTodo")
    
    div.innerHTML=`<div class="flex gap-5">
                <h2 class="bold text-xl">${addtodo}</h2>
                <input type="checkbox" name="">
                <button class="border">Remove Todo</button>
            </div>`
    document.getElementById('secondDiv').appendChild(div);
    let btn = div.querySelector("button");
    btn.addEventListener('click', (e)=>{
        div.remove();
    })
    let inp=div.querySelector("input[type='checkbox']");
    inp.addEventListener('click', (e)=>{
        let h2 = e.target.previousElementSibling;
        h2.classList.toggle("completed");
    })
    localStorage.setItem("allTodo", JSON.stringify(data))
    keyword.value="";
})
displayToDo();