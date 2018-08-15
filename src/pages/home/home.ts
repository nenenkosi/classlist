import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormPage } from '../form/form';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  nxt(){
    this.navCtrl.push(FormPage)
    const alert = this.alertCtrl.create({
      title: 'Please add user',
      subTitle: 'Click on the FAB button below to add a user',
      buttons: ['OK']
    });
    alert.present();
  }
}


  

