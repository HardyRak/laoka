import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal-list-item.component.html',
  styleUrls: ['./meal-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'onClick()',
  },
})
export class MealListItemComponent {
  /** Emoji affiché dans le badge (ex: "🍲") */
  emoji = input.required<string>();

  /** Couleur de fond du badge (ex: "#c9d9a8") */
  iconBg = input('#e7ece1');

  /** Titre du plat (ex: "Romazava hen'omby") */
  title = input.required<string>();

  /** Sous-titre (ex: "jeu. 27 · + Boulgour aux petits légumes") */
  subtitle = input.required<string>();

  /** Émis quand la ligne est cliquée */
  itemClicked = output<void>();

  onClick(): void {
    this.itemClicked.emit();
  }
}
