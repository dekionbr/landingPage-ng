import { Injectable } from '@angular/core';

import { IContacto } from '../models/contacto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})

export class EntregaService {

  private entrega: any;
  private contacto: IContacto;

  constructor(private http: HttpClient) {
    this.contacto = {
        nombre: '',
        compania: '',
        email: '',
        pais: '',
        mensaje: ''
    };
  }

  entregaForm(nCorp: IContacto): Observable<any> {
      // this.http.post('/assets/send.php', nCorp).subscribe(data => {
      // console.log(data);
      // this.entrega = JSON.stringify(data);
      // });
    return this.http.post('/assets/php/send.php', nCorp);
  }
}
