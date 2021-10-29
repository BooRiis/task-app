import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {IntroductionComponent} from './components/introduction/introduction.component'
 import { NotFoundComponent } from './components/not-found/not-found.component';
// import { PasswordComponent } from './components/password/password.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { UsernameComponent } from './components/username/username.component';

const routes: Routes = [
  // { path: 'introduction', component: IntroductionComponent },
  { path: '', redirectTo: 'introduction', pathMatch: 'full' },
  {
    path: 'introduction', 
    loadChildren: () => import('./components/introduction/introduction.module').then(m => m.IntroductionModule)
  },
  // { path: 'username', component: UsernameComponent },
  {
    path: 'username', 
    loadChildren: () => import('./components/username/username.module').then(m => m.UsernameModule)
  },
  // { path: 'password', component: PasswordComponent },
  {
    path: 'password', 
    loadChildren: () => import('./components/password/password.module').then(m => m.PasswordModule)
  },
  // { path: 'profile', component: ProfileComponent },
  {
    path: 'profile', 
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
