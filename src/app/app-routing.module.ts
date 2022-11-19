import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path:'', redirectTo: 'home',
  pathMatch:'full'},
  {path:'home', component:HomeComponent,},
  {path:'about', component:AboutComponent,},
  {path:'projects', component:ProjectsComponent,},
  {path:'contact', component:ContactComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { MatSliderModule } from '@angular/material/slider';

@NgModule ({
  imports: [
    MatSliderModule,
  ]
})
class AppModule {}
