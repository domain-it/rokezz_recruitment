import {Component, inject} from '@angular/core';
import { ContactFormComponent } from '../../shared/components/elements/contact-form/contact-form.component';
import { Section } from '../../shared/components/elements/section/section';
import { Button } from '../../shared/components/controls/button/button';
import { EmailLinkComponent } from '../../shared/components/elements/email-link/email-link.component';
import { CardComponent } from '../../shared/components/elements/card/card.component';
import { CardGridComponent } from '../../shared/components/elements/card-grid/card-grid.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true, // Ensure standalone is true if not already
  imports: [
    ContactFormComponent,
    Section,
    Button,
    EmailLinkComponent,
    CardComponent,
    CardGridComponent,
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  private router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
