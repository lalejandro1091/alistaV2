import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the CargarRltPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cargar-rlt',
  templateUrl: 'cargar-rlt.html',
})
export class CargarRltPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CargarRltPage');
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
