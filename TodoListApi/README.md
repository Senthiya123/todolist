# ToDoListAPI Backend

## Usage
- To view the list of todo items, navigate to `http://localhost:5111/api/todo`.
- To add a new todo item, send a POST request to `http://localhost:5111/api/todo` with the following JSON payload:
  ```json
  {
    "task": "Your task here"
  }
  ```
- To delete a todo item, send a DELETE request to `http://localhost:5111/api/todo/{id}` where `{id}` is the ID of the todo item.
- After performing any CRUD operation, you can refresh the `http://localhost:5111/api/todo` endpoint to see if the changes are reflected.

## Endpoints
- `GET /api/todo`: Get all todo items.
- `GET /api/todo/{id}`: Get a todo item by ID.
- `POST /api/todo`: Add a new todo item.
- `DELETE /api/todo/{id}`: Delete a todo item by ID.

## Technologies Used
- ASP.NET Core
- C#
