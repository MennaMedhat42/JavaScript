const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", addTask);

function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText
    };

    tasks.push(task);

    taskInput.value = "";

    renderTasks();
}

function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const div = document.createElement("div");

        div.classList.add("task");

        div.innerHTML = `
            <span>${task.text}</span>

            <div class="task-buttons">
                <button class="edit-btn" onclick="editTask(${task.id})">
                    Edit
                </button>

                <button class="delete-btn" onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(div);
    });
}

function deleteTask(id){

    tasks = tasks.filter(task => task.id !== id);

    renderTasks();
}

function editTask(id){

    const newText = prompt("Edit your task");

    if(newText === null || newText.trim() === ""){
        return;
    }

    tasks = tasks.map(task => {

        if(task.id === id){

            return {
                ...task,
                text: newText
            };
        }

        return task;
    });

    renderTasks();
}