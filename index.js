window.alert("Welcome to Notes app update 1.1  ;)")
var inputElement = document.querySelector('#text-field-input');
var addButton = document.querySelector('#new_task');
var newList = document.getElementById('new_list')

listContainer = document.getElementById('list-container')

inputElement.addEventListener('keydown', function (event) {
    var key = event.key
    if (key === "Enter") {
        display()
    }
})

newList.onclick = newCategory

function newCategory() {
    var task = inputElement.value
    var ul = document.createElement('ul')
    ul.classList.add("category")
    ul.textContent = inputElement.value
    if (task === "") {
        window.alert("Cannot add empty task !")
    } else {
        // Inserting ul element 
        listContainer.insertBefore(ul, listContainer.querySelectorAll('ul')[0])
        //listContainer.appendChild(ul)
        let spanEle = document.createElement('span')
        spanEle.innerHTML = "\u00d7"
        ul.appendChild(spanEle)
    }
    inputElement.value = ""
    saveData()
}

addButton.onclick = display

function display() {
    var categories = document.querySelector(".category")
    var task = inputElement.value
    var li = document.createElement("li")
    li.textContent = task
    if (task === "") {
        window.alert("Cannot add empty task !")
    } else {
        // Inserting new li when add button is clicked
        categories.insertBefore(li, categories.querySelectorAll('li')[0])
        let spanEle = document.createElement('span')
        spanEle.innerHTML = "\u00d7"
        li.appendChild(spanEle)
    }
    inputElement.value = ""
    saveData()
}

listContainer.addEventListener("click", function (ele) {
    if (ele.target.tagName == "LI") {
        ele.target.classList.toggle("checked")
        saveData()
    } else if (ele.target.tagName == "SPAN") {
        ele.target.parentNode.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()