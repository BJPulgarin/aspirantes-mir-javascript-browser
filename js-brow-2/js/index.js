const input = document.querySelector("#task")
const form = document.querySelector("#newTask")
const list = document.querySelector("#list")
const noTask = document.getElementById("noTasks")
const deleteAll = document.querySelector("#deleteAll")
deleteAll.style.display = "none"

function handleSubmit(event){
    event.preventDefault()
    text = input.value
    const li = document.createElement("li")
    li.setAttribute("class", "no-checked")
    const p = document.createElement("label")
    const checkbox = document.createElement("input")
    p.textContent = text
    li.appendChild(p)
    li.appendChild(addCheck())
    li.appendChild(addDelete())
    list.appendChild(li)
    input.value = ""
    noTask.style.display = "none"
}

form.addEventListener("submit", handleSubmit)
function addCheck(){
    const check = document.createElement("input")
    check.setAttribute("class", "inputs")
    check.setAttribute("type", "checkbox")
    check.addEventListener("change", function(event){
        if (this.checked){
            const item = event.target.parentElement
            item.className = "checked"
            deleteAll.style.display = "block"
        }
        else{
            const item = event.target.parentElement
            item.className = "no-checked"
            const liChecked = document.querySelectorAll(".checked")
            if (liChecked.length === 0){
                deleteAll.style.display = "none"
            }
        }
    })
    return (check)
}

function addDelete(){
    const deleteBtn = document.createElement("img")
    deleteBtn.setAttribute("src", "./img/deleteBtn.png")
    deleteBtn.setAttribute("class", "deleteBtn")
    deleteBtn.addEventListener("click", function(event){
        const liDelete = event.target.parentElement
        list.removeChild(liDelete)
        const items = document.querySelectorAll("li")
        if (items.length === 0){
            noTask.style.display = "block"
            deleteAll.style.display = "none"
        }
    })
    return (deleteBtn)
}

deleteAll.addEventListener("click", function(){
    const lis = list.querySelectorAll(".checked");
    [].forEach.call(lis, element => {
        list.removeChild(element)
    })
    deleteAll.style.display = "none"
})





  