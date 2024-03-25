const todolist = []
function addTodo() {
    const todo = document.getElementById("todoInput").value
    todolist.push(todo)
    displayList()
}

function displayList() {
    const listContainer = document.getElementById("todolist")
    const ulElement = document.createElement("ul")
    todolist.forEach((element) => {
        const liElement = document.createElement("li")
        liElement.textContent = element
        ulElement.appendChild(liElement)
    })

    listContainer.innerHTML = `${ulElement.outerHTML}`
}

document.getElementById("todoInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo()
    }
})