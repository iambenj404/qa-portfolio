import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink directives

@Component({
  selector: 'app-header',
  standalone: true, // Mark as standalone
  imports: [RouterModule], // Import RouterModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { }