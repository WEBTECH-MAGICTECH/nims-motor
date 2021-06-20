import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  {path: 'signin', component:SignInComponent},
  {path: 'signup', component:SignUpComponent},
  {path: 'editprofile', component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
