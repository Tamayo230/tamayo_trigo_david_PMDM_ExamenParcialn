import { Component } from '@angular/core';
import {GestionListaService} from './../servicios/gestion-lista.service'
import { Producto, Datos } from './../interfaces/mis-interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public listaservicio : Producto[]=[]

  constructor(private servicioLista: GestionListaService ) {
    this.listaservicio = servicioLista.getLista();
  }

}
