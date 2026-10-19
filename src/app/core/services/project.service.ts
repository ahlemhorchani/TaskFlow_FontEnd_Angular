// core/services/project.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../features/projects/models/project.model'; // Ajustez le chemin selon votre projet
import { PROJECTS } from '../../features/projects/data/projects.data'; // Ajustez le chemin de vos données statiques

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  /**
   * Récupère la liste des projets sous forme d'Observable.
   */
  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
