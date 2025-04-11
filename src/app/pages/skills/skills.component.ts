import { Component, OnInit } from '@angular/core';
import { PortfolioDataService, Skill } from '../../services/portfolio-data.service'; // Import service and interface
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor

@Component({
  selector: 'app-skills',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule because the template uses *ngFor
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  // Array to hold skill data
  skills: Skill[] = [];

  // Inject the data service
  constructor(private portfolioDataService: PortfolioDataService) { }

  // Fetch data when the component initializes
  ngOnInit(): void {
    this.skills = this.portfolioDataService.getSkills();
  }
}