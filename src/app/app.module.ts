import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Routes, RouterModule} from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from "@angular/forms"; //Esto da soporte a la etiquita ngModels dentro del DOM
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


const appRoutes:Routes = [
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"conversation/:uid", component: ConversationComponent},
  {path:"profile", component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConversationComponent,
    ProfileComponent,
    MenuComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
