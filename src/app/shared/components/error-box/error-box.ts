import { Component, Input } from '@angular/core';
import { ASSETS } from '../../constants/image-library';

@Component({
  selector: 'app-error-box',
  imports: [],
  templateUrl: './error-box.html',
  styleUrl: './error-box.css',
})
export class ErrorBox {
  readonly ASSETS = ASSETS;
  @Input() errorTitle: string = 'Error';
  @Input() errorMessage: string = 'An unexpected error occurred.';

  

}
