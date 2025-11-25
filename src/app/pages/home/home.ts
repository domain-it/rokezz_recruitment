import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { Achivments } from '@app/components/achivments/achivments';
import { Button } from '@app/shared/components/controls/button/button';
import { ContactFormComponent } from '@app/shared/components/elements/contact-form/contact-form.component';
import { NgOptimizedImage } from '@angular/common';
import { HomePageBanner } from '@app/components/banner/home-page-banner.component';
import { Section } from '@app/shared/components/elements/section/section';
import { EmailLinkComponent } from '@app/shared/components/elements/email-link/email-link.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    HomePageBanner,
    Achivments,
    Button,
    ContactFormComponent,
    NgOptimizedImage,
    Section,
    EmailLinkComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
