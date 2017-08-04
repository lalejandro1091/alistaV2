import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SedePage } from '../sede/sede';
import { UsuariosPage } from '../usuarios/usuarios';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the DatosGeneralesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-datos-generales',
  templateUrl: 'datos-generales.html',
})
export class DatosGeneralesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosGeneralesPage');
  }
  goSede(){
    this.navCtrl.setRoot(SedePage);
  }
  goUsuarios(){
    this.navCtrl.setRoot(UsuariosPage);
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
