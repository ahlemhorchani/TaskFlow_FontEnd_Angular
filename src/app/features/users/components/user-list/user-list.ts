import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from '../user-card/user-card';
import { ViewToggleComponent } from '../../../../shared/components/view-toggle/view-toggle'; // Ajustez le chemin selon votre dossier
import { User } from '../../models/user.model';
import { Project } from '../../../projects/models/project.model';
import { UserService } from '../../../../core/services/user.service';
import { ProjectService } from '../../../../core/services/project.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, UserCardComponent, ViewToggleComponent],
  templateUrl: './user-list.html',
})
export class UserListComponent implements OnInit {
  private userService = inject(UserService);
  private projectService = inject(ProjectService);

  users = signal<User[]>([]);
  projects = signal<Project[]>([]);
  searchTerm = signal<string>('');

  // Signal pour gérer la vue active ('user' ou 'task')
  currentView = signal<string>('user');

  usersWithProjects = computed(() => {
    const allUsers = this.users();
    const allProjects = this.projects();

    return allUsers.map((user) => {
      const projectGroups = allProjects
        .map((project) => {
          const userTasks = project.tasks.filter(
            (task: any) => task.assigneeId === user.id || task.assignee === user.name,
          );

          return {
            projectName: project.name,
            tasks: userTasks,
          };
        })
        .filter((group) => group.tasks.length > 0);

      return {
        ...user,
        projectGroups: projectGroups,
      };
    });
  });

  filteredUsers = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const enrichedUsers = this.usersWithProjects();

    if (!term) return enrichedUsers;
    return enrichedUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term),
    );
  });

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users.set(users);
    });

    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects.set(projects);
    });
  }

  onUserSelected(user: User): void {
    console.log('Utilisateur sélectionné :', user);
  }
}
