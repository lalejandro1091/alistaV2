import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuariosPage } from '../usuarios/usuarios';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the CrearUsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-crear-usuario',
  templateUrl: 'crear-usuario.html',
})
export class CrearUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearUsuarioPage');
  }

  irUsuarios(){
    this.navCtrl.setRoot(UsuariosPage);
  }
  goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
