import {Component, inject} from '@angular/core';
import { Button } from '@app/shared/components/controls/button/button';
import { Section } from '@app/shared/components/elements/section/section';
import { IconComponent } from '@app/shared/components/elements/icon/icon.component';
import { ImageGalleryComponent } from '@app/shared/components/elements/image-gallery/image-gallery.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [
    Button,
    Section,
    IconComponent,
    ImageGalleryComponent,
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
