import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TopBarLoginComponent } from './top-bar-login/top-bar-login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [								
    AppComponent,
    TopBarComponent,
      SignupFormComponent,
      LoginComponent,
      UserDashboardComponent,
      RegisterComponent,
      TopBarLoginComponent,
      LoginFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
