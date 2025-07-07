let data=JSON.parse(localStorage.getItem('notes')) || []
function displayNote(){
    data.map((singleNote)=>{
        
    })
}
let allNote=document.getElementById('allNote');
document.getElementById('btn').addEventListener('click', (e)=>{
    let date= new Date().toLocaleDateString();
    let divEle=document.createElement('div')
    divEle.setAttribute('class', 'singleNote')
    divEle.innerHTML=
    `
            <div class="border bg-red-400 flex flex-col gap-2">
                <div class="flex items-center gap-3 p-1">
                    <button class="editBtn border rounded p-2 bg-white cursor-pointer" id="">Edit</button>
                    <button class="removeBtn border rounded p-2 bg-white cursor-pointer" id="">Remove</button>
                </div>
                <div>
                    <div class="note div w-full h-40 bg-orange-400 p-4 hidden break-words overflow-y-scroll" id=""></div>
                    <textarea class="txtA border  w-full h-40 bg-orange-200 flex justify-center items-top" id="" placeholder="Type to add note"></textarea>
                </div>
                <div class="date">${date}</div>
            </div>
    `
    let keyword = divEle.querySelector('textarea');
    let div = divEle.querySelector('.note');
    
    
    
    allNote.appendChild(divEle)
    let edit = divEle.querySelector('.editBtn');
    let remove = divEle.querySelector('.removeBtn');
    edit.addEventListener('click', (e)=>{
        e.preventDefault();
        let text=keyword.value;
        div.innerHTML=text;
        keyword.classList.toggle('hidden')
        div.classList.toggle('hidden')
    })
    remove.addEventListener('click', (e)=>{
        e.preventDefault();
        e.target.parentNode.parentNode.parentNode.remove();

    })
    
    


    
    
})