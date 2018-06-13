import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VentajasComponent } from './components/ventajas/ventajas.component';
import { NegocioComponent } from './components/negocio/negocio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PasosComponent } from './components/pasos/pasos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FooterComponent } from './components/footer/footer.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
