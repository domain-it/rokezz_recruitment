import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import {AboutMe} from './pages/about-me/about-me';
import {Achivments} from './pages/achivments/achivments';
import {Changes} from './pages/changes/changes';
import {Gallery} from './pages/gallery/gallery';
import {ContactPage} from './pages/contact-page/contact-page';
import {Consultation} from './pages/consultation/consultation';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMe},
  { path: 'achivments', component: Achivments},
  { path: 'changes', component: Changes },
  { path: 'gallery', component: Gallery},
  { path: 'contact-page', component:ContactPage},
  { path: 'consultation', component: Consultation}
];
