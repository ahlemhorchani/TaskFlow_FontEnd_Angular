import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../../../projects/components/task-list/task-list';

@Component({
  selector: 'app-user-project-group',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './user-project-group.html',
})
export class UserProjectGroupComponent {
  group = input.required<any>();
}
