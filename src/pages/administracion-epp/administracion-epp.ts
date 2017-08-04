import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the AdministracionEppPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-administracion-epp',
  templateUrl: 'administracion-epp.html',
})
export class AdministracionEppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdministracionEppPage');
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
