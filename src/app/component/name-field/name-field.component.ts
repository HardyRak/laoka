import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './name-field.component.html',
  styleUrls: ['./name-field.component.scss'],
})
export class NameFieldComponent {
  /** Prénom affiché / édité */
  name = input.required<string>();

  /** Émis quand le prénom est modifié */
  nameChange = output<string>();

  /** Initiale affichée dans l'avatar */
  initial = computed(() => this.name().trim().charAt(0).toUpperCase());

  onNameInput(value: string): void {
    this.nameChange.emit(value);
  }
}
