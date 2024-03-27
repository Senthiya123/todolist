import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItem } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})

export class TodolistComponent implements OnInit {
  newTask: TodoItem = { id: 0, task: '' }; // Initialize newTask object
  tasks: TodoItem[] = []; // Initialize tasks array

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.todoService.getTodos()
      .subscribe(tasks => this.tasks = tasks);
  }

  addTask(): void {
    if (!this.newTask.task) { return; } // If task is empty, don't add
    this.todoService.addTodo(this.newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.newTask.task = ''; // Clear input after adding task
      },
      error => {
        console.error('Error adding task:', error);
        // Handle error in UI (e.g., show error message)
      }

      );
  }

  deleteTask(task: TodoItem): void {
    this.todoService.deleteTodo(task)
      .subscribe(() => {
        this.tasks = this.tasks.filter(t => t !== task); // Remove deleted task from tasks array
      });
  }

  updateTask(task: TodoItem): void {
    this.todoService.updateTodo(task)
      .subscribe();
  }
}