import { Task } from '../../models/task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  constructor() { }

  @Input() task!: Task;
  @Output() updateTask = new EventEmitter<Task>();

  ngOnInit(): void {
  }

  isOverdue(task: Task): boolean {
    return !task.done && task.deadline != null && task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0);
  }

  onToggleDone(task: Task): void {
    this.updateTask.emit(task);
  }

}
