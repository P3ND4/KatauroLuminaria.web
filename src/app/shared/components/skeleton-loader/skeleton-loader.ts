import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-skeleton-loader',
  imports: [CommonModule],
  templateUrl: './skeleton-loader.html',
  styleUrl: './skeleton-loader.css'
})
export class SkeletonLoader {
  @Input() type?: number;
  ngOnInit(): void {
    this.type = this.type ?? 1;
  }
}
