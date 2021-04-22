import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';

@NgModule({
  declarations: [		
    AppComponent,
    TopBarComponent,
      SignupFormComponent,
      SignupButtonComponent
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
