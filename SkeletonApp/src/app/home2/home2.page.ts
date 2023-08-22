import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  campoSeleccionado: string="";
  texto1:string="";
  texto2: string="";

  campoSeleccOriginal:string = "";
  texto1Original: string="";
  texto2Original: string="";

  

  nombreCampo: string = 'Nivel Educacional';
  nombre: string="";
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['username'];
    }) 
    this.texto2Original = this.texto2;
    this.campoSeleccOriginal = this.campoSeleccionado;
    this.texto1Original = this.texto1;

  }

  limpiar(){
    this.campoSeleccionado = '';
    this.texto1= '';
    this.texto2= '';
  }

  mostrar(){
    alert(this.texto2Original)
    this.campoSeleccionado = this.campoSeleccOriginal;
    this.texto1 = this.texto1Original;
    this.texto2 = this.texto2Original;
  }

  ngOnInit() {
  }

}
