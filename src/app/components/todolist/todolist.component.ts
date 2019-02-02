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
  tasks: { label: string, done: boolean }[] = [];

  /**
   * @ignore
   */
  constructor() {}

  /**
   * Add new task
   * @param {string} task
   */
  addTask(task: string) {
    let newTask = {
      label: task,
      done: false,
    };
    if (newTask.label !== '') {
      this.tasks.push(newTask);
    }
  }

  /**
   * Delete selected task
   * @param {number} index
   */
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  /**
   * Cross done task
   * @param {number} index
   */
  lineThrough(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

}
