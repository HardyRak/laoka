import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DishNutritionStat } from '../../types/dish-nutrition-stat';

@Component({
  selector: 'app-dish-of-day-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-of-day-card.component.html',
  styleUrls: ['./dish-of-day-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishOfDayCardComponent {
  /** Petit label en haut à gauche, ex: "PLAT DU JOUR" */
  eyebrow = input<string>('PLAT DU JOUR');

  /** Pays/origine affiché dans le badge en haut à droite, ex: "Madagascar" */
  country = input<string>();

  /** Catégorie du plat, ex: "PORC & FEUILLES DE MANIOC PILÉES" */
  category = input.required<string>();

  /** Nom du plat, ex: "Ravitoto sy henakisoa" */
  dishName = input.required<string>();

  /** Description du plat */
  description = input<string>();

  /** Liste des ingrédients affichés en tags */
  ingredients = input<string[]>([]);

  /** URL de l'illustration du plat (emoji utilisé en repli si absent) */
  image = input<string>();

  /** Emoji de repli si aucune image n'est fournie */
  fallbackEmoji = input<string>('🍽️');

  /** Statistiques nutritionnelles affichées en bas */
  nutrition = input<DishNutritionStat[]>([]);
}
