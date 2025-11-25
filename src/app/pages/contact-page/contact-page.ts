import {Component, inject} from '@angular/core';
import { ContactFormComponent } from '@app/shared/components/elements/contact-form/contact-form.component';
import { Section } from '@app/shared/components/elements/section/section';
import { Button } from '@app/shared/components/controls/button/button';
import { EmailLinkComponent } from '@app/shared/components/elements/email-link/email-link.component';
import { CardComponent } from '@app/shared/components/elements/card/card.component';
import { CardGridComponent } from '@app/shared/components/elements/card-grid/card-grid.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
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
