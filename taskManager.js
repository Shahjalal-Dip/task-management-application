let tasks=[];

const loadTasks = () => {
  const tasksJSON = localStorage.getItem('tasks');//value retrive from localStorage by key-(tasks)

  if (tasksJSON) { //here we check the retrieved value is valid JSON
    try {
      tasks = JSON.parse(tasksJSON); // here we try to convert JSON string to an object and store in tasks array
    } catch (error) {
      console.error("Error parsing tasks JSON:", error);
      tasks = []; // Fallback to an empty array if parsing fails
    }
  } else {
    tasks = []; // Initialize as empty array if no tasks are stored in local storage
  }
};


const saveTasks = () => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // here we try to Convert tasks array elements into JSON string and save them in localStorage
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

loadTasks();

const addTask = (title, description, priority) => {
  const dueDate = document.getElementById('taskDueDate').value;

  const newTask = {
    id: Date.now(),// we use this for unique ID
    title,
    description,
    priority,
    dueDate,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks(tasks);
};

// Event listener for form submission
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();
  const priority = document.getElementById('taskPriority').value;

  if (title && description) { //here we check title and destription fill or not
    addTask(title, description, priority);

    // Reset form fields
    taskForm.reset();
  } else {
    alert('Please fill out all fields.');
  }
});

// Render tasks in the task list
const renderTasks = (allTask) => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the existing list
  
    allTask.forEach((task) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item');
      if (task.completed) {
        taskItem.classList.add('task-completed');
      }
  
      taskItem.innerHTML = `
        <div>
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p><strong>Priority:</strong> ${task.priority}</p>
          <p><strong>Due Date:</strong> ${task.dueDate}</p>
        </div>
        <div class="task-actions">
          <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
          <button class="delete-btn">Delete</button>
          <button class="update-btn">Update</button>
        </div>
      `;
  
      // Add event listeners for task actions
      taskItem.querySelector('.complete-btn').addEventListener('click', () => toggleTaskCompletion(task.id));
      taskItem.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));
      taskItem.querySelector('.update-btn').addEventListener('click', () => updateTask(task.id,updates));
  
      taskList.appendChild(taskItem);
    });
  };
  
  // Call renderTasks to display tasks on page load
  renderTasks(tasks);

  // Delete a task by ID
const deleteTask = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  saveTasks();
  renderTasks(tasks);
};

// Toggle task completion
const toggleTaskCompletion = (taskId) => {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  saveTasks();
  renderTasks(tasks);
};

const updates=(taskIndex)=>{
  const dueDate = document.getElementById('taskDueDate').value;
  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();
  const priority = document.getElementById('taskPriority').value;

  if(dueDate&&title&&description){ // here checking all info for update set or not
      tasks[taskIndex].dueDate=dueDate;
      tasks[taskIndex].title=title;
      tasks[taskIndex].description=description;
      tasks[taskIndex].priority=priority;

   saveTasks();
   renderTasks(tasks);
   taskForm.reset();
  }else{
    alert("Please first fill out form for update task");
  }
}
const updateTask=(taskId,updates)=>{
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  
  if (taskIndex === -1) {
    console.error(`Task with ID ${taskId} not found.`);
    return;
  }else{
      updates(taskIndex); // here i use callback
  }
}

// Filter tasks based on status
const filterTasks = () => {
  const filterValue = document.getElementById('filterTasks').value;

  const filteredTasks = tasks.filter((task) => {
    if (filterValue === 'completed') return task.completed;
    if (filterValue === 'incomplete') return !task.completed;
    return true; // 'for all task'
  });

  renderTasks(filteredTasks);
};

// Event listener for filter dropdown
document.getElementById('filterTasks').addEventListener('change', filterTasks);

// Sort tasks based on selected criteria
const sortTasks = () => {
  const sortValue = document.getElementById('sortTasks').value;

  if (sortValue === 'priority') {
    tasks.sort((a, b) => {
      const priorityOrder = { low: 1, medium: 2, high: 3 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];//for desending order
    }); 

  } else if (sortValue === 'dueDate') {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));//for asending order
  }

  renderTasks(tasks);
};

// Event listener for sort dropdown
document.getElementById('sortTasks').addEventListener('change', sortTasks);

// Search tasks by title
const searchTasks = () => {
  const searchValue = document.getElementById('searchTasks').value.toLowerCase();

  const searchedTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchValue)
  );

  renderTasks(searchedTasks);
};

// Event listener for search input
document.getElementById('searchTasks').addEventListener('input', searchTasks);



  