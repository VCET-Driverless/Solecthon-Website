import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  MatFormFieldModule,
  MatFormFieldAppearance,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeammembersComponent } from './teammembers/teammembers.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    AchievementsComponent,
    NavBarComponent,
    TeammembersComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule, MatFormFieldModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
