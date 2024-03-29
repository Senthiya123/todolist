# Todo Angular Frontend

## Description
This project is a frontend application for managing todo lists. It allows users to add, and delete tasks in their todo lists.

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install project dependencies.
4. Run `ng serve` to start the development server.
5. Open your browser and navigate to `http://localhost:4200/` to view the application.

## Usage
- To add a new task, enter the task in the input field and click the "Add Task" button.
- To delete a task, click the "Delete" button next to the task.

## Technologies Used
- Angular
- TypeScript
- HTML
- CSS

## Folder Structure
```
todolist/
│
├── src/                      # Source files
│   ├── app/                  # Angular components and services
│   │   ├── app.component.html         # Main component template
│   │   ├── app.component.ts           # Main component logic
│   │   ├── todolist/                   # Todo list component
│   │   │   ├── todolist.component.html   # Todo list component template
│   │   │   ├── todolist.component.ts     # Todo list component logic
│   │   ├── todo.service.ts         # Service for managing todo items
│   ├── assets/               # Static assets (images, icons, etc.)
├── node_modules/             # Node.js modules (ignored by Git)
├── .gitignore                # Specifies intentionally untracked files to ignore
├── package.json              # Metadata about the project and its dependencies
├── README.md                 # This README file
```

-----------------------------------------------------------------------------------------------------------------------------------

# TodoList API Backend

This is the backend for a TodoList application, built using ASP.NET Core Web API.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Endpoints](#endpoints)

## Introduction

The TodoList API Backend provides endpoints to manage Todo items. It allows users to perform operations such as creating, reading, and deleting Todo items.

## Technologies Used

- ASP.NET Core
- C#
- RESTful API principles

## Setup Instructions

To run the TodoList API Backend locally, follow these steps:

1. Make sure you have [.NET SDK](https://dotnet.microsoft.com/download) installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the `TodoListApi` directory.
4. Run `dotnet build` to build the project.
5. Run `dotnet run` to start the API server.

The API server will start running on `http://localhost:5111`.

## Folder Structure

```
TodoListApi/
│
├── Controllers/
│   └── TodoController.cs
│
├── Models/
│   └── TodoItem.cs
│
├── TodoListApi.csproj
│
└── Program.cs
```

## Endpoints

- **GET /api/todo**: Retrieves all Todo items.
- **GET /api/todo/{id}**: Retrieves a Todo item by ID.
- **POST /api/todo**: Creates a new Todo item.
- **DELETE /api/todo/{id}**: Deletes a Todo item by ID.

## License

This project is licensed under the [MIT License](LICENSE).

---
