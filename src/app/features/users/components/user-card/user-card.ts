import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { Task } from '../../../projects/models/task.model';
import { UserProjectGroupComponent } from '../user-project-group/user-project-group';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, UserProjectGroupComponent],
  templateUrl: './user-card.html',
})
export class UserCardComponent {
  user = input.required<User>();
  userSelected = output<User>();

  selectUser(): void {
    this.userSelected.emit(this.user());
  }

  todoTasksCount = computed(() => {
    return this.getAllTasks().filter((task) => task.status === 'En attente').length;
  });

  inProgressTasksCount = computed(() => {
    return this.getAllTasks().filter((task) => task.status === 'En cours').length;
  });

  completedTasksCount = computed(() => {
    return this.getAllTasks().filter((task) => task.status === 'Terminé').length;
  });

  // Méthode propre pour récupérer les projectGroups sans erreur TS dans le HTML
  getProjectGroups(): any[] {
    return (this.user() as any).projectGroups || [];
  }

  private getAllTasks(): Task[] {
    const projectGroups = this.getProjectGroups();
    return projectGroups.flatMap((group: any) => group.tasks || []);
  }

  getProjectRoleClass(role: string): string {
    switch (role) {
      case 'Développeur':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Designer':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Testeur':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'Chef de projet':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  }
}
