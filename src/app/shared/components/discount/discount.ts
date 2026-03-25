import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-discount',
  imports: [],
  templateUrl: './discount.html',
  styleUrl: './discount.css',
})
export class Discount {
  @Input() discount: number = 0;
}
