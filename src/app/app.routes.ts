import { Routes } from '@angular/router';

// --- IMPORT YOUR PAGE COMPONENTS HERE ---
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
// --- END IMPORTS ---

// --- PASTE THE ROUTES ARRAY FROM THE EXAMPLE ---
export const routes: Routes = [
  // Define routes for each page
  { path: '', component: HomeComponent, title: 'Home - QA Engineer' },
  { path: 'about', component: AboutComponent, title: 'About Me' },
  { path: 'skills', component: SkillsComponent, title: 'My Skills' },
  { path: 'experience', component: ExperienceComponent, title: 'Work Experience' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects Showcase' },
  { path: 'contact', component: ContactComponent, title: 'Contact Me' },
  // Wildcard route redirects to home for any unknown paths
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
// --- END ROUTES ARRAY ---