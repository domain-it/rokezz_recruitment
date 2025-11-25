import { Component, input } from '@angular/core';

export type CardVariant = 'default' | 'list' ;

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  title = input<string>();
  subtitle = input<string>();
  variant = input<CardVariant>();
}
