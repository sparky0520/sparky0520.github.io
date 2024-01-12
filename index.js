var inputElement = document.querySelector('#text-field-input');
var addButton = document.querySelector('#text-field-button');

listContainer = document.getElementById('list-container')

addButton.onclick = display
inputElement.addEventListener('keydown',function(event){
    var key = event.key
    if(key === "Enter"){
        display( )
    }
})

function display() {
    var task = inputElement.value
    var li = document.createElement("li")
    li.textContent = task
    if (task === "") {
        window.alert("Cannot add empty task !")
    } else {
        // Inserting new li when add button is clicked
        listContainer.insertBefore(li, listContainer.getElementsByTagName('li')[0])
        let spanEle = document.createElement('span')
        spanEle.innerHTML = "\u00d7"
        li.appendChild(spanEle)
    }
    inputElement.value = ""
    saveData()
}

listContainer.addEventListener("click",function(ele){
    if(ele.target.tagName == "LI"){
        ele.target.classList.toggle("checked")
        saveData()
    }else if(ele.target.tagName == "SPAN"){
        ele.target.parentNode.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()