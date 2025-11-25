import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [NgStyle], // Add NgStyle to imports
  template: `
    <div class="image-gallery" [ngStyle]="gridStyle()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .image-gallery {
        display: grid;
        gap: 3rem;
        padding-block: 3rem; /* Default padding */
      }

      .image-gallery ::ng-deep img {
        width: 100%;
        height: auto;
        border: 1px solid hsla(0, 100%, 100%, 0.1);
        border-radius: 8px;
      }

      @media (max-width: 768px) {
        .image-gallery {
          grid-template-columns: 1fr !important;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class ImageGalleryComponent {
  columns = input<number>(3);

  gridStyle() {
    return {
      'grid-template-columns': `repeat(${this.columns()}, 1fr)`,
    };
  }
}
