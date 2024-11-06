import { Routes } from '@angular/router';
import { NavigationPageComponent } from './header/navigation-page/navigation-page.component';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    { path: 'contact', component: ContactPageComponent},
    { path: 'nav', component: NavigationPageComponent },
    { path: '', component:HomeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }, 
]
