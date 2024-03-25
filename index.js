const listContainer = document.getElementById("listContainer")
const todo = document.getElementById("todoInput")
function addTodo() {
    if (todo.value) {
        const li = document.createElement("li")
        li.innerHTML = todo.value
        listContainer.appendChild(li)
        const span = document.createElement("span")
        span.innerHTML = "x"
        li.appendChild(span)
    }
    todo.value = ""
}

document.getElementById("todoInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo()
    }
})

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveState()
    }
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveState()
    }
}, false)

function saveState() {
    localStorage.setItem("state", listContainer.innerHTML)
}
function display() {
    listContainer.innerHTML = localStorage.getItem("state")
}
function resetApp() {
    listContainer.innerHTML = ""
    saveState()
}
display()
