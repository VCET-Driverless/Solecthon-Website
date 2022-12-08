import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeammembersComponent } from './teammembers/teammembers.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
