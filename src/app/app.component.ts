import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet

// Import necessary components used in the template
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark component as standalone
  imports: [
    RouterOutlet, // Import RouterOutlet for routing
    HeaderComponent, // Import HeaderComponent to use <app-header>
    FooterComponent  // Import FooterComponent to use <app-footer>
  ], // Import all components/directives used in the template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Or .css
})
export class AppComponent {
  title = 'qa-portfolio'; // Default title property
}
