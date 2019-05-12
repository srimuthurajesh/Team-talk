import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { RegisterComponent } from './home/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './auth.guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'chatpage', canActivate:[AuthGuard], 
    component: ChatComponent 
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
