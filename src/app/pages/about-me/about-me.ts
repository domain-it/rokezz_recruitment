import {Component, inject} from '@angular/core';
import { Button } from '@app/shared/components/controls/button/button';
import { NgOptimizedImage } from '@angular/common';
import { Section } from '@app/shared/components/elements/section/section';
import { ImageGalleryComponent } from '@app/shared/components/elements/image-gallery/image-gallery.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [
    Button,
    NgOptimizedImage,
    Section,
    ImageGalleryComponent,
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  private router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
