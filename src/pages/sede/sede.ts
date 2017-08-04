import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatosGeneralesPage } from '../datos-generales/datos-generales';
import { UsuariosPage } from '../usuarios/usuarios';
import { AlertController } from 'ionic-angular';
import { AgregarSedePage } from '../agregar-sede/agregar-sede';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the SedePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sede',
  templateUrl: 'sede.html',
})
export class SedePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SedePage');
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar Sede',
      message: '¿Estas seguro que deseas eliminar la Sede?',
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Eliminar clicked');
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  agregarsede(){
    this.navCtrl.setRoot(AgregarSedePage);
  }

  goDatos(){
    this.navCtrl.setRoot(DatosGeneralesPage);
  }
  goUsuarios(){
    this.navCtrl.setRoot(UsuariosPage);
  }
  goSettings(){
    this.navCtrl.push(SettingsPage);
  }

}
