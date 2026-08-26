export type DishNutritionIcon = 'protein' | 'fiber' | 'calories';

export interface DishNutritionStat {
  /** Icône représentant la stat (SVG dédié, pas d'emoji) */
  icon: DishNutritionIcon;
  /** Valeur, ex: "29" */
  value: string;
  /** Unité, ex: "g", "kcal" */
  unit: string;
  /** Libellé, ex: "Protéines" */
  label: string;
}

export const nutrition: DishNutritionStat[] = [
  { icon: 'protein', value: '29', unit: 'g', label: 'Protéines' },
  { icon: 'fiber', value: '8.2', unit: 'g', label: 'Fibres' },
  { icon: 'calories', value: '522', unit: '', label: 'kcal' },
];
