import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalesComponent } from './animales/animales.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProtectorasComponent } from './protectoras/protectoras.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'blog', component: BlogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'animales', component: AnimalesComponent },
  { path: 'protectoras', component: ProtectorasComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
