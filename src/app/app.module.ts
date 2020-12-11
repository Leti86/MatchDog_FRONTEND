import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { BlogComponent } from './blog/blog.component';
import { ProtectorasComponent } from './protectoras/protectoras.component';
import { AnimalesComponent } from './animales/animales.component';
import { LoginComponent } from './login/login.component';
import { LoginProtectoraComponent } from './login-protectora/login-protectora.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { CategoriasComponent } from './categorias/categorias.component';
import { IdentificarComponent } from './identificar/identificar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    ProtectorasComponent,
    AnimalesComponent,
    LoginComponent,
    LoginProtectoraComponent,
    MapComponent,
    CategoriasComponent,
    IdentificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXoe3vvdGGosbpLVZqUncQDgiW4UAbl58'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
