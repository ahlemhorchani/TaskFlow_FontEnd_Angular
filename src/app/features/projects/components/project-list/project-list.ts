import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from '../project-card/project-card';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../../../core/services/project.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [FormsModule, ProjectCardComponent],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectListComponent implements OnInit {
  // Injection du service
  private projectService = inject(ProjectService);

  // Initialisation avec un tableau vide (les données viendront du service)
  projects = signal<Project[]>([]);

  // Terme de recherche lié avec [(ngModel)]
  searchTerm = signal<string>('');

  // Signal calculé qui filtre les projets selon leur nom
  filteredProjects = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) {
      return this.projects();
    }
    return this.projects().filter((project) => project.name.toLowerCase().includes(term));
  });

  ngOnInit(): void {
    // Correction du type : (projects: Project[]) au lieu de (projects: Project)
    // Correction de la variable : this.projectService au lieu de this.ProjectService
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects.set(projects);
    });
  }

  onProjectSelected(project: Project): void {
    console.log('Projet sélectionné :', project);
  }
}
