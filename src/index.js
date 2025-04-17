// src/index.js
document.addEventListener('DOMContentLoaded', () => {

  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Submit event fired!");

    const taskDescription = taskInput.value.trim();
    console.log("Task Description Input:", taskDescription);

    if (taskDescription !== '') {
      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = taskDescription;
      console.log("Appending LI:", newTaskItem.textContent);
      taskList.appendChild(newTaskItem);
      console.log("UL Content After Append:", taskList.innerHTML);
    } else {
       console.log("Task description was empty.");
    }
  });

});
