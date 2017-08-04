import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the ConsultarRltPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-consultar-rlt',
  templateUrl: 'consultar-rlt.html',
})
export class ConsultarRltPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarRltPage');
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
