import {Component, inject} from '@angular/core';
import { Button } from '../../shared/components/controls/button/button';
import { Section } from '../../shared/components/elements/section/section';
import { IconComponent } from '../../shared/components/elements/icon/icon.component';
import { ImageGalleryComponent } from '../../shared/components/elements/image-gallery/image-gallery.component';
import {Router} from '@angular/router'; // Import ImageGalleryComponent

@Component({
  selector: 'app-gallery',
  imports: [
    Button,
    Section,
    IconComponent,
    ImageGalleryComponent, // Add ImageGalleryComponent
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  private router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
