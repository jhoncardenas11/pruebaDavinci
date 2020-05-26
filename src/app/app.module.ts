import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// components
import { HomeComponent } from './components/home/home.component';
import { MeetsComponent } from './components/meets/meets.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { InfoSpecialistComponent } from './components/info-specialist/info-specialist.component';
import { SurgeriesComponent } from './components/surgeries/surgeries.component';
import { MeetsAtHomeComponent } from './components/meets-at-home/meets-at-home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeetsComponent,
    SpecialistsComponent,
    InfoSpecialistComponent,
    SurgeriesComponent,
    MeetsAtHomeComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
