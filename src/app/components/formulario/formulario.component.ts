import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { EntregaService } from '../../services/entrega.service';
import { IContacto } from '../../models/contacto.model';

@Component({
  selector: 'likuid-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  submitted = false;

  nContacto: IContacto = {
    nombre: '',
    compania: '',
    email: '',
    pais: '',
    mensaje: '',
    captcha: ''
  };

  constructor(private sendEmail: EntregaService) { }

  ngOnInit() { }

  onSubmit() {

    this.submitted = true;

    this.sendEmail.entregaForm(this.nContacto).subscribe(res => {
      console.log('Formulario Success', res);
    }, error => {
      console.log('Formulario Error', error);
    });
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

}

