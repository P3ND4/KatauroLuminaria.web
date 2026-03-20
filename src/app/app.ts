import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from './shared/services/cart/cart.service';
import { ErrorLogService } from './shared/services/errors/error.log.service';
import { ErrorBox } from "./shared/components/error-box/error-box";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ErrorBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('KatauroLuminaria.web');
  globalErrors: { name: string, error: string }[] = [];

  constructor(private errorServ: ErrorLogService) {
    this.errorServ.errors.subscribe((val) => this.globalErrors = val);
  }
  ngOnInit(): void {
    console.log('20/3/2026 4:31pm')
  }
}
