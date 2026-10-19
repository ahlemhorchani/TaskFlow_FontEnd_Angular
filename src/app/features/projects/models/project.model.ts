import { Task } from './task.model';

// Type personnalisé pour le statut du projet
export type ProjectStatus = 'En attente' | 'En cours' | 'Terminé';

// Interface représentant un projet
export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  tasks: Task[];
  startDate: string ;
  budget : number ;
}
