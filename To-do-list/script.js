function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById('taskList');
    var taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.onclick = completeTask;
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

function completeTask() {
    var completedTaskList = document.getElementById('completedTaskList');
    var taskText = this.textContent;
    var completedTaskItem = document.createElement('li');
    completedTaskItem.textContent = taskText + ' - Completed on ' + getCurrentDateTime();
    completedTaskList.appendChild(completedTaskItem);

    this.parentNode.removeChild(this);
}

function getCurrentDateTime() {
    var date = new Date();
    var dateString = date.toLocaleDateString();
    var timeString = date.toLocaleTimeString();
    return dateString + ' ' + timeString;
}
