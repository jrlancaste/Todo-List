setTimeout(1000);

const addTaskBtn = document.getElementById("add-new-btn");
const addTaskPage = document.getElementById("add-new-task");
const taskInput = document.getElementById("task-description-input");
const taskDeadline = document.getElementById("task-deadline-input");
const taskList = document.getElementById("tasks");
const doneBtn = document.getElementById("done-btn");

addTaskBtn.addEventListener("click", function(){
    addTaskPage.classList.add('show');
})
doneBtn.addEventListener('click', function(){
    addTaskPage.classList.remove('show');
    const newItem = document.createElement("li");

    const dateObj = new Date(taskDeadline.value);

    const month = dateObj.getMonth() + 1; // Add 1 to get the month in the range 1-12
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    newItem.innerHTML = `<input type="checkbox" class="task-checkbox">
                        <p class="task-text">${taskInput.value}</p>
                        <p class="deadline">${month}-${day} ${hours}:${minutes}</p>
                        <button class="trash-btn"><img src="images/trash.png" alt="" class="trash-icon"></button>`
    taskInput.value = "";
    taskDeadline.value = "";
    newItem.classList.add('task');
    newItem.addEventListener('click', (e) => {
        if(e.target.tagName == 'BUTTON' || e.target.tagName == 'IMG'){
            newItem.remove()
        }
    })
    taskList.appendChild(newItem);
})