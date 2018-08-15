import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'
import arrr from  '../form/arrr';
import { ListPage } from '../list/list';
/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  xap=arrr
  mypic:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

Cam(){

  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.mypic = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
}

  nxt(){
    this.navCtrl.push(ListPage)
  }
  
  add(name,surname,student){

    let object=new xap(name,surname,student);
    if(object!=null){
      arrr.push(object);
      console.log(arrr);
      
    }}

    View(i) {

      let name = this.xap[i].name
      let surname = this.xap[i].surname
      let student = this.xap[i].student
      const prompt = this.alertCtrl.create({
        title: 'UPDATE',
        message: "Enter the updated details of the emlpoyee you want to update",
        inputs: [
          {
            name: 'name',
            placeholder: 'Name',
            value:name
          },
          {
            name: 'surname',
            placeholder: 'Surname',
            value:surname
          },
          {
            name: 'student',
            placeholder: 'Student Number',
            value:student
          },
         
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Delete',
            handler: data => {
              arrr.splice(i,1);
              console.log('Delete clicked');
            }
          },
          {
            text: 'Update',
            handler: data => {
          

              let obj = new xap(data.name,data.surname,data.student);
              this.xap.splice(i,1,obj);
              console.log('Update clicked');
            }
          }
        ]
      });
      prompt.present();
    }

    
}   
export class xap{
name:string;
surname:string;
student:string;

constructor(name:string,surname:string,student:string,) {
  this.name=name;
  this.surname=surname;
  this.student=student;
  
}}

