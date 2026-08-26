import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
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
