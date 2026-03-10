import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink directives
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like ngClass

@Component({
  selector: 'app-header',
  standalone: true, // Mark as standalone
  imports: [RouterModule, CommonModule], // Import RouterModule and CommonModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}