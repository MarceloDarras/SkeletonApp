import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { NavController, AnimationController, IonCard } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  nombre: string="";
  contrasena: string="";
  
  private animation!: Animation;
  private animation2!: Animation;
  private animationExito!:Animation;
  private cardB!: Animation;
  private cardC!: Animation;

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const cardA = this.animationCtrl
      .create()
      .addElement(this.cardElements.first.nativeElement)
      .duration(1500)
      .iterations(1)
      .direction('alternate')
      .fromTo('background', 'white', 'Green');
    const cardB = this.animationCtrl
        .create()
        .addElement(this.cardElements.last.nativeElement)
        .duration(500)
        .beforeStyles({
          filter: 'invert(75%)',
        })
        .beforeClearStyles(['box-shadow'])
        .afterStyles({
          'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
        })
        .afterClearStyles(['filter'])
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.5)' },
          { offset: 1, transform: 'scale(1)' },
        ]);

    const cardC = this.animationCtrl
        .create()
        .addElement(this.cardElements.last.nativeElement)
        .duration(500)
        .beforeStyles({
          filter: 'invert(75%)',
        })
        .beforeClearStyles(['box-shadow'])
        .afterStyles({
          'box-shadow': 'rgba(50, 255, 0, 0.4) 0px 4px 16px 6px',
        })
        .afterClearStyles(['filter'])
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.5)' },
          { offset: 1, transform: 'scale(1)' },
        ]);

      this.animation = this.animationCtrl
      .create()
      .duration(500)
      .iterations(1)
      .addAnimation([cardA]);

      this.animation2 = this.animationCtrl
      .create()
      .duration(500)
      .iterations(2)
      .addAnimation([cardB]);

      this.animationExito = this.animationCtrl
      .create()
      .duration(500)
      .iterations(2)
      .addAnimation([cardB]);

  }

  play() {
      this.animation.play();
  }

  play2() {
    
    this.animation2.play();
  }

  login(){
    if(this.nombre != "" && this.contrasena != ""){
      this.animation.play();
      this.animationExito.play();
      this.navCtrl.navigateForward('/home2', {
        queryParams:{
          username: this.nombre
        }
      });
      alert("Bienvenido " + this.nombre);
    }else if(this.contrasena.length<4 || this.contrasena.length>15){
      document.getElementById("contrasena");
      this.animation2.play();
    }else{
      
    }
  }

  ionViewWillLeave(){

  }


}
