// Type personnalisé pour le role du user
export type rolepersenalise = 'Développeur' | 'Designer' | 'Chef de projet' | 'Testeur';
// Structure pour regrouper les tâches d'un projet spécifique


// Interface représentant un user
export interface User {
  id: number;
  name: string;
  email: string;
  role: rolepersenalise;
  active: boolean;
}
