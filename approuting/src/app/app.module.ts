import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { UserService } from './services/user.service';
import {HttpClientModule}  from '@angular/common/http';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { AboutComponent } from './component/about/about.component';
import { LocationComponent } from './component/location/location.component';
import { ContactusComponent } from './component/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailsComponent,
    AboutComponent,
    LocationComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
