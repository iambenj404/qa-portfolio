import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink

@Component({
  selector: 'app-home',
  standalone: true, // Mark as standalone
  imports: [RouterModule], // Import RouterModule because template uses routerLink
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }