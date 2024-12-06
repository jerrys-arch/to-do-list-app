# To-Do List App

## Overview

The **To-Do List App** is a simple, user-friendly application designed to help you manage your tasks effectively. It allows you to add, mark as completed, and delete tasks with ease. Tasks are saved locally on your browser using `localStorage`, so your list persists even after you close and reopen the app.

## Features

- **Add Tasks**: Enter tasks in the input box and click the "Add" button to add them to your to-do list.
- **Mark as Completed**: Click on a task to mark it as completed (crosses it off the list).
- **Delete Tasks**: Click the "X" button next to a task to delete it from the list.
- **Persistent Data**: Tasks are stored in `localStorage` and remain even after refreshing the page or reopening the app.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Persistence**: `localStorage` (browser storage)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/jerrys-arch/todo-list-app.git
    cd todo-list-app
    ```

2. **Open the app**:
   - Open the `index.html` file in your browser.

No backend or server setup is required as the app runs entirely on the client-side.

## Usage

1. Open the app in your browser.
2. To add a task, type in the input box and click the "Add" button.
3. To mark a task as completed, click on the task itself. It will be crossed off.
4. To delete a task, click the "X" button next to the task.
5. Tasks will remain even after the page is refreshed or the app is reopened, thanks to the `localStorage` feature.

## Code Overview

### HTML Structure

The HTML structure consists of:
- An input field for adding tasks (`<input id="text">`).
- A button to trigger the task addition (`<button id="btn">`).
- A container (`<ul id="list-container">`) that holds the dynamically added tasks.

### CSS Styling

The app uses basic styling to make the task list visually appealing:
- Each task is represented as a `<li>` element.
- Tasks can be marked as completed by clicking on them (crossing out the text).
- Each task has a delete button (`<span class="delete-btn">`).
- The app is responsive, adjusting layout on smaller screens.

### JavaScript Logic

- **`addTask()`**: Adds a new task to the list when the "Add" button is clicked.
- **`saveData()`**: Saves the task data (task text and completion status) to `localStorage`.
- **`showTask()`**: Loads tasks from `localStorage` and displays them on page load.
- **Task Event Listeners**:
  - Clicking on a task toggles the `checked` class, which marks it as completed.
  - Clicking on the "X" button deletes the task from the list.

### LocalStorage

- Tasks are stored in `localStorage` as an array of objects, where each object contains:
  - `text`: The task description.
  - `checked`: A boolean indicating whether the task is completed.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
