import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the ConsultarIncidentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-consultar-incidente',
  templateUrl: 'consultar-incidente.html',
})
export class ConsultarIncidentePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarIncidentePage');
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
