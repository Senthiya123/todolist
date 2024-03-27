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
