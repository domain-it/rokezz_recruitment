import { Component, input, inject, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconRegistryService } from '@app/shared/services/icon-registry.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: ` <div class="icon-container" [innerHTML]="svgIcon"></div> `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      .icon-container ::ng-deep svg {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  host: {
    '[style.width]': 'size()',
    '[style.height]': 'size()',
  },
})
export class IconComponent implements OnInit, OnDestroy {
  name = input.required<string>();
  size = input<string>('24px');
  private iconRegistry = inject(IconRegistryService);
  private sanitizer = inject(DomSanitizer);
  svgIcon: SafeHtml | null = null;
  private iconSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.loadIcon();
  }

  ngOnDestroy(): void {
    this.iconSubscription?.unsubscribe();
  }

  private loadIcon(): void {
    this.iconSubscription = this.iconRegistry.loadIcon(this.name()).subscribe({
      next: (svg) => {
        this.svgIcon = svg;
      },
      error: (err) => {
        console.error(`Failed to load icon: ${this.name()}`, err);
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(
          '<svg viewBox="0 0 24 24"><path fill="red" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'
        );
      },
    });
  }
}
