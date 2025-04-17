function initializeTaskApp() {
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = taskDescription;
      taskList.appendChild(newTaskItem);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTaskApp);
} else {
  initializeTaskApp();
}

module.exports = { initializeTaskApp };
