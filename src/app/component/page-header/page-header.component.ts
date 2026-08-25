import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  /** Petit label au-dessus du titre, ex: "VOS RÉGLAGES" / "BONJOUR CAMILLE" */
  eyebrow = input.required<string>();

  /** Titre principal */
  title = input.required<string>();

  /** Texte sous le titre (optionnel) */
  description = input<string>();

  /** Date affichée en badge à droite de l'eyebrow (optionnel) */
  date = input<string>();
}
