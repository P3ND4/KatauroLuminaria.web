import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ASSETS } from '../../constants/image-library';

@Component({
  selector: 'app-message-box',
  imports: [],
  templateUrl: './message-box.html',
  styleUrl: './message-box.css'
})
export class MessageBox {
  readonly ASSETS = ASSETS;
  @Input() data: { msg: string, warn: string } | undefined
  @Output() acept = new EventEmitter<boolean>(false);

  onAction(action: boolean){
    this.acept.emit(action);
  }
}
