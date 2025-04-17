document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page refresh

    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskList.appendChild(taskItem);

    taskInput.value = ''; // clear input field
  });
});
