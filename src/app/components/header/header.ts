import { Component, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Logo } from '../../shared/components/elements/logo/logo';
import {IconComponent} from '../../shared/components/elements/icon/icon.component';

@Component({
  selector: 'app-header',
  imports: [SharedModule, Logo, IconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '[class.menu-open]': 'menuOpen()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class Header {
  private router = inject(Router);
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((value) => !value);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.menuOpen.set(false); // Close menu after navigation
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  onDocumentClick(event: MouseEvent): void {
    if (this.menuOpen()) {
      const target = event.target as HTMLElement;
      const headerElement = document.querySelector('app-header'); // Assuming app-header is the component's selector
      if (headerElement && !headerElement.contains(target)) {
        this.menuOpen.set(false);
      }
    }
  }
}
