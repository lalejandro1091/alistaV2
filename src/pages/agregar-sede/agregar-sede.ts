import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the AgregarSedePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-agregar-sede',
  templateUrl: 'agregar-sede.html',
})
export class AgregarSedePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarSedePage');
  }
  goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
