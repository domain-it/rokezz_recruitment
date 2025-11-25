import {Component, inject} from '@angular/core';
import { Button } from '../../shared/components/controls/button/button';
import { Section } from '../../shared/components/elements/section/section';
import { IconComponent } from '../../shared/components/elements/icon/icon.component';
import { CardComponent } from '../../shared/components/elements/card/card.component';
import { CardGridComponent } from '../../shared/components/elements/card-grid/card-grid.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-achivments',
  imports: [
    Button,

    Section,
    IconComponent,
    CardComponent,
    CardGridComponent,
  ],
  templateUrl: './achivments.html',
  styleUrl: './achivments.scss',
})
export class Achivments {
  private router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
