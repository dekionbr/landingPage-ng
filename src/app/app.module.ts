import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VentajasComponent } from './components/ventajas/ventajas.component';
import { NegocioComponent } from './components/negocio/negocio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PasosComponent } from './components/pasos/pasos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FooterComponent } from './components/footer/footer.component';

// Servicios


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VentajasComponent,
    NegocioComponent,
    ServiciosComponent,
    PasosComponent,
    FormularioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
