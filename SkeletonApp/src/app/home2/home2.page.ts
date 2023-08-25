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
    if(this.campoSeleccionado == '3'){
      this.campoSeleccionado = 'Superior'
    }else if(this.campoSeleccionado == '2'){
      this.campoSeleccionado = 'Media'
    }else if(this.campoSeleccionado == '1'){
      this.campoSeleccionado = 'Basico'
    }

    if(this.texto1 == "" || this.texto2 == "" || this.campoSeleccionado == ""){
      alert("Alguno de los campos está vacío")
    }else{
      alert("Nombre: " + this.texto1 + ' ' + this.texto2 + ' | ' + "Nivel Educacional: " + this.campoSeleccionado)
    }
  
  }

  ngOnInit() {
  }

}
