import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ChoiceGroupTone = 'danger' | 'neutral' | 'success';

@Component({
  selector: 'app-choice-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choice-group.component.html',
  styleUrls: ['./choice-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceGroupComponent {
  /** Title of the group (e.g. "Accompagnements non aimés") */
  title = input.required<string>();

  /** Small caption under the title (e.g. "5 écartés") */
  subtitle = input<string>('');

  /** Icon character shown in the badge, if no [icon] content is projected (e.g. "✕") */
  icon = input('✕');

  /** Color theme of the icon badge */
  tone = input<ChoiceGroupTone>('danger');

  /** Max height of the content area before it scrolls (CSS value, e.g. "360px") */
  maxHeight = input<string>('360px');
}
