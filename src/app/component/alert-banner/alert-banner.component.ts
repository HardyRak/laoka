import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AlertVariant = 'success' | 'error';

@Component({
  selector: 'app-alert-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-banner.component.html',
  styleUrls: ['./alert-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'status',
    '[attr.aria-live]': "variant() === 'error' ? 'assertive' : 'polite'",
    '[class]': 'variant()',
  },
})
export class AlertBannerComponent {
  /** Text shown next to the icon (e.g. "Préférences enregistrées et calendrier actualisé.") */
  message = input.required<string>();

  /** Visual style of the banner */
  variant = input<AlertVariant>('success');

  /** true for the check icon (success), false for the alert icon (error) */
  isSuccess = computed(() => this.variant() === 'success');
}
