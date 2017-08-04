import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the ReportarIncidentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-reportar-incidente',
  templateUrl: 'reportar-incidente.html',
})
export class ReportarIncidentePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportarIncidentePage');
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
