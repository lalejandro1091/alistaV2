import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the RendicionCuentasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-rendicion-cuentas',
  templateUrl: 'rendicion-cuentas.html',
})
export class RendicionCuentasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RendicionCuentasPage');
  }
  goSettings(){
    this.navCtrl.push(SettingsPage);
  }

}
