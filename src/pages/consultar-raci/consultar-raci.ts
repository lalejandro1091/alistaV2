import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the ConsultarRaciPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-consultar-raci',
  templateUrl: 'consultar-raci.html',
})
export class ConsultarRaciPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarRaciPage');
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
