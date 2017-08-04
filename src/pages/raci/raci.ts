import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the RaciPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-raci',
  templateUrl: 'raci.html',
})
export class RaciPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaciPage');
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
