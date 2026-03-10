import { Component, OnInit } from '@angular/core';
import { PortfolioDataService, Project } from '../../services/portfolio-data.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and *ngIf
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-projects',
  standalone: true, // Mark as standalone
  imports: [CommonModule, ScrollAnimateDirective], // Import CommonModule because the template uses *ngFor, *ngIf
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioDataService: PortfolioDataService) { }

  ngOnInit(): void {
    this.projects = this.portfolioDataService.getProjects();
  }
}