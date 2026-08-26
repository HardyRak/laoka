import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from '../meal-list/meal-list.component';
import { SectionHeaderComponent } from '../../component/section-header/section-header.component';

@Component({
  selector: 'app-next-menus-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, MealListComponent],
  templateUrl: './next-menus-section.component.html',
  styleUrls: ['./next-menus-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextMenusSectionComponent {
  /** Petit label au-dessus du titre (ex: "La suite") */
  eyebrow = input.required<string>();

  /** Titre principal (ex: "Prochains menus") */
  title = input.required<string>();

  /** Texte du lien cliquable à droite (ex: "Voir le mois") */
  linkLabel = input.required<string>();

  /** Émis quand le lien est cliqué */
  linkClicked = output<void>();

  onLinkClick(): void {
    this.linkClicked.emit();
  }
}
