import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-email-link',
  standalone: true,
  imports: [IconComponent],
  template: `
    <a [href]="'mailto:' + email()" class="email-link">
      <app-icon name="mail" size="1em"></app-icon>
      <span>{{ email() }}</span>
    </a>
  `,
  styles: [
    `
      .email-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none; /* Remove default underline */
        color: inherit; /* Inherit color from parent */
      }

      .email-link::after {
        display: none; /* Remove default link underline */
      }
    `,
  ],
})
export class EmailLinkComponent {
  email = input.required<string>();
}
