import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoHomeComponent } from './video-home/video-home.component';
import { FlechasComponent } from './flechas/flechas.component';
import { AboutComponent } from './about/about.component';
import { ElproyectoComponent } from './elproyecto/elproyecto.component';
import { BackgroundComponent } from './background/background.component';
import { PrototipoComponent } from './prototipo/prototipo.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { EquipoComponent } from './equipo/equipo.component';


const appRoutes: Routes = [
  { path: '', component: VideoHomeComponent,  data: { state: 'home'} },
  { path: 'about', component: AboutComponent,  data: { state: 'about'}},
  { path: 'proyecto', component: ElproyectoComponent,  data: { state: 'proyecto'}},
  { path: 'prototipo', component: PrototipoComponent,  data: { state: 'prototipo'}},
  { path: 'pruebas', component: PruebasComponent,  data: { state: 'pruebas'}},
  { path: 'equipo', component: EquipoComponent,  data: { state: 'equipo'}},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoHomeComponent,
    FlechasComponent,
    AboutComponent,
    ElproyectoComponent,
    BackgroundComponent,
    PrototipoComponent,
    PruebasComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
