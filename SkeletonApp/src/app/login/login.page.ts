import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string="";
  contrasena: string="";
  

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    if(this.nombre != "" && this.contrasena != ""){
      this.navCtrl.navigateForward('/home2', {
        queryParams:{
          username: this.nombre
        }
      });
      alert("Bienvenido " + this.nombre);
    }else if(this.contrasena.length<4 || this.contrasena.length>15){
      document.getElementById("contrasena");
      alert("La contraseña no cumple con los parametros");
    }else{
      let contra = document.getElementById("contraseña")?.innerText;
      console.log(contra);
      
      if (contra){

      }
    }
  }

  ionViewWillLeave(){

  }


}
