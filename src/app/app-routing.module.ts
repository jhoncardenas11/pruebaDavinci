import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MeetsComponent } from './components/meets/meets.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { InfoSpecialistComponent } from './components/info-specialist/info-specialist.component';
import { SurgeriesComponent } from './components/surgeries/surgeries.component';
import { MeetsAtHomeComponent } from './components/meets-at-home/meets-at-home.component';


const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: MeetsComponent,
    path: 'meets'
  },
  {
    component: SpecialistsComponent,
    path: 'specialists'
  },
  {
    component: InfoSpecialistComponent,
    path: 'specialist/:id'
  },
  {
    component: SurgeriesComponent,
    path: 'surgeries'
  },
  {
    component: MeetsAtHomeComponent,
    path: 'meetshome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
