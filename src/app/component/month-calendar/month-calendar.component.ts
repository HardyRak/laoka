import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

export interface CalendarMeal {
  /** Jour du mois concerné (1-31) */
  day: number;
  /** Emoji ou image représentant le repas */
  emoji: string;
  /** Petit label décrivant le repas */
  label: string;
}

interface CalendarCell {
  day: number | null;
  meal: CalendarMeal | null;
  isToday: boolean;
  color: string;
}

const WEEKDAY_LABELS_MON_FIRST = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const WEEKDAY_LABELS_SUN_FIRST = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

const CELL_PALETTE = [
  '#DCE9C8',
  '#F5DCC0',
  '#E7D5EE',
  '#F7D9DC',
  '#F0DDC0',
  '#E3EAD0',
  '#F4E4B8',
  '#D9E9E4',
];

@Component({
  selector: 'app-month-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthCalendarComponent {
  /** Mois affiché, de 1 (janvier) à 12 (décembre) */
  month = input.required<number>();

  /** Année affichée, ex: 2026 */
  year = input.required<number>();

  /** Un repas (image/emoji + label) par jour du mois */
  meals = input<CalendarMeal[]>([]);

  /** Premier jour de la semaine : 1 = lundi (défaut, FR), 0 = dimanche */
  weekStartsOn = input<0 | 1>(1);

  /** Émis quand l'utilisateur clique sur les flèches précédent/suivant */
  monthChange = output<'prev' | 'next'>();

  /** Émis quand l'utilisateur clique sur un jour du mois (pas les cases vides) */
  dayClick = output<number>();

  weekdayLabels = computed(() =>
    this.weekStartsOn() === 1
      ? WEEKDAY_LABELS_MON_FIRST
      : WEEKDAY_LABELS_SUN_FIRST,
  );

  /** Ex: "Août 2026" */
  monthLabel = computed(() => {
    const date = new Date(this.year(), this.month() - 1, 1);
    const label = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(
      date,
    );
    return `${label.charAt(0).toUpperCase()}${label.slice(1)} ${this.year()}`;
  });

  private mealsByDay = computed(() => {
    const map = new Map<number, CalendarMeal>();
    for (const meal of this.meals()) {
      map.set(meal.day, meal);
    }
    return map;
  });

  /** Grille complète du mois (cases vides comprises, en tête et en fin) */
  calendarCells = computed<CalendarCell[]>(() => {
    const year = this.year();
    const month = this.month();
    const weekStartsOn = this.weekStartsOn();

    const daysInMonth = new Date(year, month, 0).getDate();
    const rawFirstWeekday = new Date(year, month - 1, 1).getDay(); // 0 = dimanche
    const firstWeekday =
      weekStartsOn === 1 ? (rawFirstWeekday + 6) % 7 : rawFirstWeekday;

    const today = new Date();
    const isCurrentMonth =
      today.getFullYear() === year && today.getMonth() + 1 === month;

    const cells: CalendarCell[] = [];

    for (let i = 0; i < firstWeekday; i++) {
      cells.push({ day: null, meal: null, isToday: false, color: '' });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const meal = this.mealsByDay().get(day) ?? null;
      cells.push({
        day,
        meal,
        isToday: isCurrentMonth && today.getDate() === day,
        color: meal ? this.colorFor(meal.label) : '',
      });
    }

    const trailingEmpty = (7 - (cells.length % 7)) % 7;
    for (let i = 0; i < trailingEmpty; i++) {
      cells.push({ day: null, meal: null, isToday: false, color: '' });
    }

    return cells;
  });

  /** Nombre de jours du mois affiché qui ont effectivement un repas rendu dans la grille */
  plannedDaysCount = computed(
    () => this.calendarCells().filter((cell) => cell.meal !== null).length,
  );

  trackByCell(index: number, cell: CalendarCell): string {
    return cell.day === null ? `empty-${index}` : `day-${cell.day}`;
  }

  onCellClick(cell: CalendarCell): void {
    if (cell.day !== null) {
      this.dayClick.emit(cell.day);
    }
  }

  private colorFor(label: string): string {
    let hash = 0;
    for (let i = 0; i < label.length; i++) {
      hash = (hash + label.charCodeAt(i)) % CELL_PALETTE.length;
    }
    return CELL_PALETTE[hash];
  }
}
