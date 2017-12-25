import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service'; 

import { AppComponent } from './app.component';
import { Landing } from './landing/landing.component';
import { Login } from './login/login.component';
import { Register } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/' }  
];

@NgModule({
  declarations: [
    AppComponent,
    Landing,
    Login,
    Register,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
