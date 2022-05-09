import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromDocument, Task, TaskDocument } from '../../models/task';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  tasks: Task[] = [];

  subscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.subscription = this.firestore.collection('tasks').valueChanges().subscribe((tasks: any[]) => {
      this.tasks = tasks.map(fromDocument);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addTask(task: Task) {
    this.firestore.collection('tasks').add(task);
  }
}
