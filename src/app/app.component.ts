import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import { Usuario } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'curso-angular-feb12';
  nombreDeBoton = "haz click";
  valorDeInput = "Hola!";
  list: Usuario[];

  constructor(private phService: PlaceholderService) { }

  ngOnInit() {
    this.phService.getUsersAlt().subscribe(users => {
      console.log(users)
      this.mostrarUsuarios(users)
    });
    console.log("hola");



  }


  mostrarUsuarios(e: Usuario[]) {
    console.log(e)
    this.list = e
  }

  cambiarTitulo(): void {
    this.title = "Otro titulo";
    this.nombreDeBoton = "click realizado";
    this.valorDeInput = "Nuevo valor";
  }

  vaciarLista(): void {
    this.list = []
  }

  imprimirEnConsola(): void {
    console.log(this.valorDeInput);
  }
}
