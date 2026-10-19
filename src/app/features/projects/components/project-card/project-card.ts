import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { TaskListComponent } from '../task-list/task-list';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCardComponent {
  project = input.required<Project>();
  // Le calcul du taux est fait ici (retourne un nombre entre 0 et 1)
  completionRate = computed(() => {
    const tasks = this.project().tasks;
    if (!tasks || tasks.length === 0) {
      return 0;
    }
    const completedTasks = tasks.filter((task) => task.status === 'Terminé').length;
    return completedTasks / tasks.length;}) ;
  projectSelected = output<Project>();

  selectProject(): void {
    this.projectSelected.emit(this.project());
  }



  // Différenciation visuelle des statuts de projets
  getProjectStatusClass(status: string): string {
    switch (status) {
      case 'Terminé':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'En cours':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'En attente':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  }
}
