import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule if using common directives

@Component({
  selector: 'app-about',
  standalone: true, // Mark as standalone
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // Define profileImageUrl property
  // IMPORTANT: Replace with the actual path to your image in the assets folder
  profileImageUrl = 'assets/images/benj.jpg'; // Example path

  qaPhilosophy = `I believe in a proactive approach to quality assurance, focusing on preventing defects early in the development lifecycle through collaboration, clear communication, and thorough testing. My goal is always to be a strong advocate for the end-user experience.`;
}
