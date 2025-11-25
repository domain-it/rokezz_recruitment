import {Component, inject} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './home-page-banner.component.html',
  styleUrl: './home-page-banner.component.scss',
  standalone: true,
  imports: [NgOptimizedImage, SharedModule],
})
export class HomePageBanner {
  private router = inject(Router);
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
