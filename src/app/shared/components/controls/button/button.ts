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
    '[class]': 'class()', // Bind the class input to the host element
  },
})
export class Button {
  variant = input<ButtonVariant>('default');
  active = input<boolean>(false);
  tooltip = input<string>('');
  buttonClick = output<void>();
  disabled = input<boolean>(false);
  class = input<string | undefined>(undefined);
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
