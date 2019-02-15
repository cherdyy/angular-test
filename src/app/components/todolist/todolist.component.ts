import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  /**
   * Array of task for todo list
   * @type {{ label: string, done: boolean }[]}
   */
  tasks: { label: string, done: boolean }[];

  /**
   * @ignore
   */
  constructor() {
    this.tasks = this.getTasksFromLocalStorage();
  }

  /**
   * Add new task
   * @param {string} task
   */
  addTask(task: string) {
    const newTask = {
      label: task,
      done: false,
    };
    if (newTask.label !== '') {
      this.tasks.push(newTask);
    }
    this.saveTasks();
  }

  /**
   * Delete selected task
   * @param {number} index
   */
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  /**
   * Cross done task
   * @param {number} index
   */
  lineThrough(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    this.saveTasks();
  }

  /**
   * Save tasks array to local storage
   */
  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  /**
   * Get tasks array from local storage
   */
  getTasksFromLocalStorage(): any[] {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

}
