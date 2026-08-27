import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PillButtonVariant = 'solid' | 'outline';
export type PillButtonIcon = 'check' | 'refresh' | 'arrow-right' | 'none';
export type PillButtonIconPosition = 'leading' | 'trailing';

@Component({
  selector: 'app-pill-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pill-button.component.html',
  styleUrls: ['./pill-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': "'variant-' + variant()",
  },
})
export class PillButtonComponent {
  /** Text shown inside the button (e.g. "Enregistrer mes préférences") */
  label = input.required<string>();

  /** 'solid': filled green pill (primary action). 'outline': white bg, green border/text (secondary action) */
  variant = input<PillButtonVariant>('solid');

  /** Disables interaction and dims the button */
  disabled = input(false);

  /** Which icon to show: 'check', 'refresh', 'arrow-right', or 'none' */
  icon = input<PillButtonIcon>('check');

  /** Where the icon sits relative to the label */
  iconPosition = input<PillButtonIconPosition>('leading');

  /** true (default): button stretches to fill its container. false: button hugs its content width */
  fullWidth = input(true);

  /** Emitted when the button is pressed (click or Enter/Space while focused) */
  pressed = output<void>();

  onClick(): void {
    if (this.disabled()) {
      return;
    }
    this.pressed.emit();
  }
}
