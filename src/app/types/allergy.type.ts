export interface Allergy {
  id: string;
  emojy: string;
  name: string;
}

export const allergies: Allergy[] = [
  {
    id: '1',
    emojy: '🥜',
    name: 'Peanuts',
  },
  {
    id: '2',
    emojy: '🥛',
    name: 'Lactose',
  },
  {
    id: '3',
    emojy: '🍤',
    name: 'Shellfish',
  },
  {
    id: '4',
    emojy: '🥚',
    name: 'Eggs',
  },
];
