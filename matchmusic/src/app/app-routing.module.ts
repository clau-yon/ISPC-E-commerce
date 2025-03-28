import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { FeedComponent } from './dashboard/feed/feed.component';
import { BandComponent } from './dashboard/band/band.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'band',
    component: BandComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'feed',
    component: FeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
