import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
    '[class.selected]': 'selected',
  },
})
export class RadioOptionCardComponent {
  /** Emoji or icon character shown on the left (e.g. "✨") */
  @Input() emoji = '';

  /** Title of the option (e.g. "Aucune contrainte") */
  @Input() name = '';

  /** Subtitle / helper text (e.g. "Une sélection variée et équilibrée") */
  @Input() description = '';

  /** Value carried by this option, emitted on selection */
  @Input() value: unknown;

  /** Whether this option is currently the selected one in the radio group */
  @Input() selected = false;

  /** Disables interaction */
  @Input() disabled = false;

  /** Emits the `value` when the card is picked */
  @Output() selectedChange = new EventEmitter<unknown>();

  onClick(): void {
    if (this.disabled || this.selected) {
      return;
    }
    this.selected = true;
    this.selectedChange.emit(this.value);
  }
}
