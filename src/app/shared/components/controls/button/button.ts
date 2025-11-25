import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';

export type ButtonVariant = 'default' | 'secondary' | 'icon';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class Button {
  variant = input<ButtonVariant>('default');
  active = input<boolean>(false);
  tooltip = input<string>('');
  buttonClick = output<void>();
  disabled = input<boolean>(false);
  hovering = signal(false);

  onClick() {
    this.buttonClick.emit();
  }

  onMouseEnter() {
    this.hovering.set(true);
    console.log('hovering')
  }

  onMouseLeave() {
    this.hovering.set(false);
    console.log('leave')

  }
}
