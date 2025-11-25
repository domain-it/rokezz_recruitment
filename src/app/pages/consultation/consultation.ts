import { Component } from '@angular/core';
import { ContactFormComponent } from '../../shared/components/elements/contact-form/contact-form.component';
import { Section } from '../../shared/components/elements/section/section';
import { EmailLinkComponent } from '../../shared/components/elements/email-link/email-link.component';
import {NgOptimizedImage} from '@angular/common'; // Import EmailLinkComponent

@Component({
  selector: 'app-consultation',
  imports: [
    ContactFormComponent,
    Section,
    EmailLinkComponent,
    NgOptimizedImage,
    // Add EmailLinkComponent
  ],
  templateUrl: './consultation.html',
  styleUrl: './consultation.scss',
})
export class Consultation {}
