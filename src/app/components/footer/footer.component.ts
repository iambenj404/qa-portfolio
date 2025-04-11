import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule if using directives like *ngIf, *ngFor, etc. (Not needed here, but good practice)

@Component({
  selector: 'app-footer',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule (or others if needed)
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
