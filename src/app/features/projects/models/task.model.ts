// Types personnalisés pour les valeurs spécifiques
export type TaskPriority = 'Haute' | 'Moyenne' | 'Basse';
export type TaskStatus = 'En attente' | 'En cours' | 'Terminé';

// Interface représentant une tâche
export interface Task {
  id: number;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: String ;
  description : String ;
  assigneeId?: number; // Propriedé optionnelle autorisant un ID de membre
}
