document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const dateTimeInput = document.getElementById('dateTime');
    const taskList = document.getElementById('taskList');

    // Add task
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const taskDateTime = dateTimeInput.value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText} - <small>${taskDateTime}</small></span>
            <div>
                <button class="complete">✔</button>
                <button class="edit">✏</button>
                <button class="delete">✖</button>
            </div>
        `;
        taskList.appendChild(listItem);

        taskInput.value = '';
        dateTimeInput.value = '';

        // Mark task as completed
        listItem.querySelector('.complete').addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        // Edit task
        listItem.querySelector('.edit').addEventListener('click', function() {
            const newTask = prompt('Edit your task:', taskText);
            const newDateTime = prompt('Edit date and time:', taskDateTime);
            if (newTask) {
                listItem.querySelector('span').innerHTML = `${newTask} - <small>${newDateTime}</small>`;
            }
        });

        // Delete task
        listItem.querySelector('.delete').addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
    });
});
