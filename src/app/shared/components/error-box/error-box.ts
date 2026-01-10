import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-box',
  imports: [],
  templateUrl: './error-box.html',
  styleUrl: './error-box.css',
})
export class ErrorBox {
  @Input() errorTitle: string = 'Error';
  @Input() errorMessage: string = 'An unexpected error occurred.';

  

}
