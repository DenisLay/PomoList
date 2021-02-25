import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-check',
  templateUrl: './task-check.component.html',
  styleUrls: ['./task-check.component.scss']
})
export class TaskCheckComponent {

  @Input() check: string;
  @Output() clickEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  check_false: string = 'https://imageup.ru/img10/3710875/check_false.png';
  check_true: string = 'https://imageup.ru/img182/3710878/check_true.png';

}
