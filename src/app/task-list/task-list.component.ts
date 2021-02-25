import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../Shared/interfaces/task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  taskList: Task[] = [];

  @Input() onAddTask(task: Task): void {
    this.taskList.unshift(task);
  }

}
