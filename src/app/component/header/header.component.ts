import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /** Nom de l'utilisateur affiché dans l'avatar (initiale) */
  userName = input<string>('');

  /** Initiale calculée à partir du nom d'utilisateur */
  userInitial = computed(() => this.userName().trim().charAt(0).toUpperCase());
}
