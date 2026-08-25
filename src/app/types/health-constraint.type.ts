export interface HealthConstraint {
  id: string;
  emojy: string;
  name: string;
  description: string;
}
export const healthConstraints: HealthConstraint[] = [
  {
    id: '1',
    emojy: '🥗',
    name: 'Végétarien',
    description: 'Ne consomme pas de viande ni de poisson.',
  },
  {
    id: '2',
    emojy: '🌱',
    name: 'Vegan',
    description: 'Ne consomme aucun produit d’origine animale.',
  },
  {
    id: '3',
    emojy: '🍞',
    name: 'Sans gluten',
    description: 'Évite les aliments contenant du gluten.',
  },
  {
    id: '4',
    emojy: '🥛',
    name: 'Sans lactose',
    description: 'Évite les produits laitiers contenant du lactose.',
  },
];
