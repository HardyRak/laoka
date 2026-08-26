import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealListComponent {}
