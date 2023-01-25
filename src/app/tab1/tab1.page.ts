import { Producto, Datos } from './../interfaces/mis-interfaces';
import { Component } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GestionListaService} from './../servicios/gestion-lista.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datosProducto: Producto = {
    "id": 3,
    "titulo": 	"Mens Cotton Jacket",
    "foto": 	"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "valoracion": 4.7
  };

 constructor(private serviciorest: HttpClient,private servicioLista: GestionListaService ) {
    //this.consultaRest(12);
 }
//Metodo para btnNuevo realizar consulta aleatoria
public nuevo(){
  let indiceAle : number;
  indiceAle = this.generaIndice();
  this.consultaRest(indiceAle);
}
public anadir(){
  this.servicioLista.addProducto(this.datosProducto);
  console.log(this.servicioLista);
}


 // Método que realiza una consulta REST a fakestoreapi.com
 private consultaRest(indiceAle : number){
  //declaramos el producto que se cargara al comenzar la aplicacion
  let productoConsulta : Producto;
     // Declaramos el Observable. Requerirá importar la clase
  let respuesta: Observable<Datos>
  
  // Llamamos a la función get del servicio HttpClient y le pasamos la ruta del fichero que queremos leer
  // Nos devolverá un observable que nos permitirá estar al tanto de cuando los nuevos datos están disponibles
  respuesta = this.serviciorest.get<Datos>("https://fakestoreapi.com/products/"+indiceAle);
  console.log();
  // Nos suscribimos al observable para indicar lo que queremos que ocurra cuando se produzca algún cambio
  // Le pasamos una función con el código que queremos que se ejecute
  respuesta.subscribe( resp => {
    console.log(resp);
    //productoConsulta = resp;
    this.datosProducto.id = resp.id;
    this.datosProducto.foto = resp.image;
    this.datosProducto.titulo =resp.title;
    this.datosProducto.valoracion = resp.price;

    
  } );
 }

 // Método que genera un número aleatorio entre 1 y 20
 private generaIndice(): number {
   return Math.floor(Math.random() * 19) + 1;
 }
}
