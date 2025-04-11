import { Component, OnInit } from '@angular/core';
import { PortfolioDataService, Experience } from '../../services/portfolio-data.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor

@Component({
  selector: 'app-experience',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule because the template uses *ngFor
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(private portfolioDataService: PortfolioDataService) { }

  ngOnInit(): void {
    this.experience = this.portfolioDataService.getExperience();
  }
}