import { Component, signal } from '@angular/core';
import { ProjectListComponent } from './features/projects/components/project-list/project-list';
import { UserListComponent } from './features/users/components/user-list/user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectListComponent, UserListComponent],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TaskFlow');
}
