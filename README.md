# Task Management Application

A web-based Task Management application that allows users to add, update, delete, and toggle tasks. Tasks are categorized based on priority, and additional features like filtering, sorting, and due dates enhance usability. The application is fully responsive and persistent using `localStorage`.

## Live Demo
[Task Management Application Live](https://task-management777.netlify.app/)

## GitHub Repository
[Task Management Application Repository](https://github.com/Shahjalal-Dip/task-management-application)

## Features
- **Core Features**:
  - Add tasks with title, description, priority, and due date.
  - Update task details.
  - Delete tasks by ID.
  - Toggle task completion (mark as complete/incomplete).
  - Save tasks to `localStorage` for persistence.

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: `localStorage` for task persistence

## Getting Started
### Prerequisites
Ensure you have a modern web browser to run the application locally or access the live demo.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Shahjalal-Dip/task-management-application.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-management-application
   ```
3. Open `index.html` in your browser to view the application.

## Usage
1. **Add Tasks**:
   - Fill in the task title, description, priority, and due date in the input form.
   - Click the "Add Task" button.

2. **Update Tasks**:
   - Select a task to modify its details.
   - Save changes to update the task.

3. **Delete Tasks**:
   - Use the delete button associated with a task to remove it.

4. **Toggle Completion**:
   - Mark tasks as complete or incomplete using the toggle button.

5. **Filter/Search Tasks**:
   - Use filter and search options to organize tasks based on your requirements.

6. **Sort Tasks**:
   - Use sort option based on priority and dueDate to organize tasks based on your requirements.

## Project Structure
```
|-- index.html       # Main HTML file
|-- styles.css       # Stylesheet for the application
|-- taskManager.js   # Core JavaScript logic for task management
```

## Implementation Details
- **Task Object**:
  - Contains `id`, `title`, `description`, `priority`, `dueDate`, and `isCompleted` properties.
- **Unique ID Generation**:
  - Uses `Date.now()` to create unique IDs for tasks.
- **LocalStorage Integration**:
  - Tasks are stored and retrieved from `localStorage` to ensure persistence.
- **Error Handling**:
  - Handles invalid inputs and edge cases such as duplicate tasks.

## Contribution Guidelines
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Author
[Shahjalal Dip](https://www.linkedin.com/in/shahjalal-dip)
