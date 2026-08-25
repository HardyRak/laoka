import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pill-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pill-button.component.html',
  styleUrls: ['./pill-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillButtonComponent {
  /** Text shown inside the button (e.g. "Enregistrer mes préférences") */
  label = input.required<string>();

  /** Disables interaction and dims the button */
  disabled = input(false);

  /** Shows the leading check icon */
  showIcon = input(true);

  /** Emitted when the button is pressed (click or Enter/Space while focused) */
  pressed = output<void>();

  onClick(): void {
    if (this.disabled()) {
      return;
    }
    this.pressed.emit();
  }
}
