import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { IntroductionComponent } from './components/introduction/introduction.component';
//import { UsernameComponent } from './components/username/username.component';
// import { PasswordComponent } from './components/password/password.component';
// import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LocalStorageService } from './services/local-storage.service';
import { OnboardingGuard } from './guards/onboarding.guard';
import { ProfileGuard } from './guards/profile.guard';
import { DataJsonService } from './services/dataJson.service';
// import { IntroductionModule } from './components/introduction/introduction.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // IntroductionModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    LocalStorageService,
    AuthGuard,
    DataJsonService,
    ProfileGuard,
    OnboardingGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
