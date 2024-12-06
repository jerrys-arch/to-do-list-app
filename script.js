
const inputBox = document.getElementById("text");
const listContainer = document.getElementById("list-container");


function addTask() {
    const taskText = inputBox.value.trim();  
    if (taskText === '') {
        alert("You must write something!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    const span = document.createElement('span');
    span.textContent = "\u00d7";  
    span.classList.add("delete-btn");
    li.appendChild(span);

    listContainer.appendChild(li);

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN" && e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    const tasks = [];
    const taskItems = listContainer.getElementsByTagName('li');
    
    for (let task of taskItems) {
        const taskObj = {
            text: task.firstChild.textContent.trim(),  
            checked: task.classList.contains('checked')
        };
        tasks.push(taskObj);
    }

   
    localStorage.setItem("data", JSON.stringify(tasks));
}

function showTask() {
    const savedTasks = JSON.parse(localStorage.getItem("data"));

    if (savedTasks && savedTasks.length > 0) {
        savedTasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.text;  

            if (task.checked) {
                li.classList.add('checked');  
            }

            const span = document.createElement('span');
            span.textContent = "\u00d7";  
            span.classList.add("delete-btn");
            li.appendChild(span);  

            listContainer.appendChild(li);
        });
    }
}
document.addEventListener("DOMContentLoaded", showTask);
