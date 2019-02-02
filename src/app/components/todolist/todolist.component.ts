import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasks: { label: string, done: boolean }[] = [];
  task__count: number = 0;
  ngOnInit() {

  }

  addTask(task){
    let newTask = {
      label: task,
      done: false,
    };
    if (newTask.label !== '') {
      this.tasks.push(newTask);
      this.task__count += 1;
    }
  }
  deleteElement(index: number){
    this.tasks.splice(index, 1);
    this.task__count -= 1;
  }
  line__through(index: number){
    this.tasks[index].done = !this.tasks[index].done;
  }

}
