import { Component, Input } from '@angular/core';
import { ASSETS } from '../../constants/image-library';

@Component({
  selector: 'app-box-loader',
  imports: [],
  templateUrl: './box-loader.html',
  styleUrl: './box-loader.css'
})
export class BoxLoader {
  readonly ASSETS = ASSETS;
  @Input() message: string = "Cargando...";
}
