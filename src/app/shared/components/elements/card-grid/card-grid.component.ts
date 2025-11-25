import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="card-grid" [ngStyle]="gridStyle()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .card-grid {
        display: grid;
        gap: 3rem; /* Default gap */
      }

      @media (max-width: 768px) {
        .card-grid {
          grid-template-columns: 1fr !important;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class CardGridComponent {
  columns = input<number>(3); // Default to 3 columns
  gap = input<string>('3rem'); // Default gap

  gridStyle() {
    return {
      'grid-template-columns': `repeat(${this.columns()}, 1fr)`,
      'gap': this.gap(),
    };
  }
}
