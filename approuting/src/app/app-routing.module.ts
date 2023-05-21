import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { AboutComponent } from './component/about/about.component';
import { LocationComponent } from './component/location/location.component';
import { ContactusComponent } from './component/contactus/contactus.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' ,pathMatch:'full'}, // default rout
  { path: 'home', component: AppComponent },
  { path: 'user', component: UsersComponent },
  { path: 'user/:id', component: UserdetailsComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'location', outlet:'loc', component: LocationComponent },
      { path: 'contactus',outlet:'contact', component: ContactusComponent },
    ],
  },
  {path:'**',redirectTo:'home'} //Invalid rount , This should be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
