import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../Shared/interfaces/task";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: Task;

}
