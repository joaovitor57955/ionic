import { Component } from '@angular/core';
import { User } from '../Model/user';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
alertButtons: any;

constructor(
  
  private alertController: AlertController,
  private userService:UserService

  ) {}
  
  user = new User()
  

  async presentAlert(tipo: string, texto:string) {

    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });
  
    await alert.present();
  }
  
  save() {
    this.userService.add(this.user);
    this.presentAlert("Aviso", "Cadastrado");
    console.log(this.user); 
  
  }
  }
  


