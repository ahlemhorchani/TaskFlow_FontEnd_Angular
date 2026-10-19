import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center py-10 px-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
      <h3 class="text-base font-semibold text-gray-800">{{ title() }}</h3>
      <p class="text-sm text-gray-500 mt-1">{{ message() }}</p>
    </div>
  `,
})
export class EmptyStateComponent {
  title = input.required<string>();
  message = input.required<string>();
}
