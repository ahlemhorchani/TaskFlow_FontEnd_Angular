import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskPriority, TaskStatus } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent {
  tasks = input.required<Task[]>();

  // Style de la bordure latérale et fond selon le statut
  getTaskStatusClass(status: TaskStatus): string {
    switch (status) {
      case 'Terminé':
        return 'border-l-emerald-500 bg-emerald-50/40 text-emerald-900';
      case 'En cours':
        return 'border-l-indigo-500 bg-indigo-50/40 text-indigo-900';
      case 'En attente':
        return 'border-l-amber-500 bg-amber-50/40 text-amber-900';
      default:
        return 'border-l-slate-400 bg-slate-50 text-slate-800';
    }
  }

  // Style des badges de priorité
  getPriorityClass(priority: TaskPriority): string {
    switch (priority) {
      case 'Haute':
        return 'bg-red-100 text-red-700 font-bold';
      case 'Moyenne':
        return 'bg-orange-100 text-orange-700 font-semibold';
      case 'Basse':
        return 'bg-slate-100 text-slate-600 font-normal';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  }
}
