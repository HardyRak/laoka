import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio-option-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-option-card.component.html',
  styleUrls: ['./radio-option-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'onClick()',
    '[class.selected]': 'selected()',
  },
})
export class RadioOptionCardComponent {
  /** Emoji or icon character shown on the left (e.g. "✨") */
  emoji = input('');

  /** Title of the option (e.g. "Aucune contrainte") */
  name = input('');

  /** Subtitle / helper text (e.g. "Une sélection variée et équilibrée") */
  description = input('');

  /** Value carried by this option, emitted on selection */
  value = input<unknown>();

  /** Whether this option is currently the selected one in the radio group */
  selected = input(false);

  /** Disables interaction */
  disabled = input(false);

  /** Emits the `value` when the card is picked */
  selectedChange = output<unknown>();

  onClick(): void {
    if (this.disabled() || this.selected()) {
      return;
    }
    this.selectedChange.emit(this.value());
  }
}
