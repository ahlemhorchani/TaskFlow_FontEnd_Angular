import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200 shadow-xs">
      <button
        type="button"
        (click)="onSelect('task')"
        [class]="
          activeView() === 'task'
            ? 'bg-white text-indigo-600 shadow-sm font-semibold'
            : 'text-gray-600 hover:text-gray-900 font-medium'
        "
        class="px-4 py-2 text-sm rounded-lg transition-all duration-200 focus:outline-none"
      >
        Par tâche
      </button>

      <button
        type="button"
        (click)="onSelect('user')"
        [class]="
          activeView() === 'user'
            ? 'bg-white text-indigo-600 shadow-sm font-semibold'
            : 'text-gray-600 hover:text-gray-900 font-medium'
        "
        class="px-4 py-2 text-sm rounded-lg transition-all duration-200 focus:outline-none"
      >
        Par user
      </button>
    </div>
  `,
})
export class ViewToggleComponent {
  // Vue actuellement active ('task' ou 'user') reçue via un Signal input
  activeView = input.required<string>();

  // Événement émis lors du changement de vue
  viewChange = output<string>();

  onSelect(view: string): void {
    this.viewChange.emit(view);
  }
}
