
# Simple Todo App

This project is a dynamic todo application built with React, using a backend API to fetch and update todos. Users can mark tasks as completed or not completed, and the app updates the UI accordingly.

## Features
- Fetches a list of todos from a backend API.
- Displays tasks with dynamic styling (green border for completed tasks, red border for incomplete tasks).
- Allows users to toggle the completion status of a task.
- Only the modified task re-renders when toggled.

## Backend API
The app fetches data from [dummyjson.com](https://dummyjson.com/todos) which provides a list of todos in JSON format. The todos include properties such as:
- `id`: The unique identifier for each todo.
- `todo`: The description of the task.
- `completed`: Boolean indicating whether the task is completed.
- `userId`: Identifier for the user associated with the task.

### Example API Response:
```json
{
  "todos": [
    {
      "id": 1,
      "todo": "Do something nice for someone you care about",
      "completed": false,
      "userId": 152
    },
    {
      "id": 2,
      "todo": "Memorize a poem",
      "completed": true,
      "userId": 13
    }
    // More todos...
  ],
  "total": 254,
  "skip": 0,
  "limit": 30
}
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher) and npm/yarn installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shivam1817/simple-todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-todo-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the App

To start the development server:

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

## Components Overview

### App Component
- Fetches todos from the backend API and sets them in the `todos` state.
- Handles the logic for toggling the completion status of a todo.

### Todo Component
- Receives `todo`, `id`, and `completed` as props.
- Displays each todo with dynamic styling based on its completion status.
- Includes a button to toggle the completion status of the todo.

## Future Enhancements
- Add the ability to create, update, and delete todos.
- Implement user authentication to associate todos with specific users.
- Improve styling and UX.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
