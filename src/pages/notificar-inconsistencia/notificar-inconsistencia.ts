import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the NotificarInconsistenciaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-notificar-inconsistencia',
  templateUrl: 'notificar-inconsistencia.html',
})
export class NotificarInconsistenciaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificarInconsistenciaPage');
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
