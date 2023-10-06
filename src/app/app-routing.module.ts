import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditpassComponent } from './pages/editpass/editpass.component';
import { GetcategoriesComponent } from './pages/getcategories/getcategories.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDataComponent } from './pages/user-data/user-data.component';


const routes: Routes = [
{path:"Login",component:LoginComponent},
{path:"profile",component:ProfileComponent},
{path:"",component:HomeComponent},
{path:"cars",component:GetcategoriesComponent},
{path:"register",component:RegisterComponent},
{path:"about",component:AboutComponent},
{path:"contact",component:ContactComponent},
{path:"allCars",component:ProfileComponent},
{path:"details/:id",component:DetailsComponent},
{path:"editPass",component:EditpassComponent},
{path:"userData",component:UserDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
