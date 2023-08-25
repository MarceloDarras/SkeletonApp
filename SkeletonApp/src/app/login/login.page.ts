import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavController, AnimationController, IonCard, Animation } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  nombre: string="";
  contrasena: string="";
  
  private cardA!: Animation;
  private cardB!: Animation;
  private cardC!: Animation;

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cardA = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(0).nativeElement)
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

    this.cardB = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(1).nativeElement)
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    this.cardC = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(2).nativeElement)
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);
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
