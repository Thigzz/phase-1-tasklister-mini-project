// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== '') {
      const newTaskLi = document.createElement('li');
      newTaskLi.textContent = taskDescription;
      taskList.appendChild(newTaskLi);
      taskInput.value = '';
    } else {
      console.log("Please enter a task description.");
    }
  });

});