import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatosGeneralesPage } from '../datos-generales/datos-generales';
import { SedePage } from '../sede/sede';
import { CrearUsuarioPage } from '../crear-usuario/crear-usuario';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the UsuariosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }
  crearU(){
    this.navCtrl.setRoot(CrearUsuarioPage);
  }
  goDatos(){
    this.navCtrl.setRoot(DatosGeneralesPage);
  }
  goSede(){
    this.navCtrl.setRoot(SedePage);
  }
  goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
