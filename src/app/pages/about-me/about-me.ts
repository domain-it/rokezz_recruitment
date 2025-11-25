import {Component, inject} from '@angular/core';
import { Button } from '../../shared/components/controls/button/button';
import { NgOptimizedImage } from '@angular/common';
import { Section } from '../../shared/components/elements/section/section';
import { ImageGalleryComponent } from '../../shared/components/elements/image-gallery/image-gallery.component';
import {Router} from '@angular/router'; // Import ImageGalleryComponent

@Component({
  selector: 'app-about-me',
  imports: [
    Button,
    NgOptimizedImage,
    Section,
    ImageGalleryComponent, // Add ImageGalleryComponent
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
