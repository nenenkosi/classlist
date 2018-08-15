import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormPage } from '../form/form';
import arrr from  '../form/arrr'
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  xap=arrr
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  add(name,surname,student){
    let object=new xap(name,surname,student);
    if(object!=null){
      arrr.push(object);
      console.log(arrr);
}
}
nxt(){
this.navCtrl.push(FormPage)
}
}
export class xap{
  user:string;
  name:string;
  surname:string;
  student:string;
  
  constructor(name:string,surname:string,student:string,) {
    this.name=name;
    this.surname=surname;
    this.student=student;
    
  }}

