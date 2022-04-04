import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [
    {title: '牛乳を買う', done: false},
    {title: '可燃ゴミを出す', done: true},
    {title: '銀行に行く', done: false},
  ];

  newTaskTitle = '';

  addTask(){
    this.tasks.push({
      title: this.newTaskTitle,
      done: false
    });

    this.newTaskTitle = '';

  }
}
// Todoアプリとして必要そうな機能を追加する