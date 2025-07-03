document.getElementById('btn').addEventListener('click', (e)=>{
    e.preventDefault()
    let div=document.createElement('div')
    document.getElementById('allTodo').appendChild(`<div class="singleTodo">
                <h2>code for 4 hrs. daily</h2>
                <input type="checkbox" name="" id="">
                <button>Remove Todo</button>
            </div>`)
})