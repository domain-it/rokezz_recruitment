import { Component } from '@angular/core';
import { ContactFormComponent } from '@app/shared/components/elements/contact-form/contact-form.component';
import { Section } from '@app/shared/components/elements/section/section';
import { EmailLinkComponent } from '@app/shared/components/elements/email-link/email-link.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-consultation',
  imports: [
    ContactFormComponent,
    Section,
    EmailLinkComponent,
    NgOptimizedImage,
  ],
  templateUrl: './consultation.html',
  styleUrl: './consultation.scss',
})
export class Consultation {}
