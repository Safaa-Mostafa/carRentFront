import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { InterceptorInterceptor } from './interceptors/interceptor.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { GetcategoriesComponent } from './pages/getcategories/getcategories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditpassComponent } from './pages/editpass/editpass.component';
import { UserDataComponent } from './pages/user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    GetcategoriesComponent,
    RegisterComponent,
    AboutComponent,
    FooterComponent,
    TeamComponent,
    ContactComponent,
    DetailsComponent,
    EditpassComponent,
    UserDataComponent,


   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
   { provide:HTTP_INTERCEPTORS,
    useClass:InterceptorInterceptor,
    multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
