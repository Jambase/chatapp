import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, Alert } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  username: string = '';

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {


  }

  alert(title, message: string) {
    let alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alertBox.present();
  }
  
  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)) {
      //all cool
      this.navCtrl.push(ChatPage, {
        username : this.username
      })

    }
    else{
      this.alert('Error','Invalid username');
    }
  }

}

