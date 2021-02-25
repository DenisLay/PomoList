import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-sender',
  templateUrl: './form-sender.component.html',
  styleUrls: ['./form-sender.component.scss']
})
export class FormSenderComponent {

  text: string;
  @Output() textEmitter: EventEmitter<string> = new EventEmitter<string>();

  addNewItem(value: string) {
    this.textEmitter.emit(value);
  }

}
