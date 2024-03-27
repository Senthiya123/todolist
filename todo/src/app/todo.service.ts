import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define TodoItem interface
export interface TodoItem {
  id: number;
  task: string;
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5111/api/todo';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.apiUrl);
  }

  addTodo(todo: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, todo);
  }

  deleteTodo(todo: TodoItem): Observable<void> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<void>(url);
  }

  updateTodo(todo: TodoItem): Observable<void> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<void>(url, todo);
  }
}
