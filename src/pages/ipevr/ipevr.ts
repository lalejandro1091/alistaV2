import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SmipevrPage } from '../smipevr/smipevr';
import { CmipevrPage } from '../cmipevr/cmipevr';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the IpevrPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ipevr',
  templateUrl: 'ipevr.html',
})
export class IpevrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IpevrPage');
  }
  goSM(){
    this.navCtrl.setRoot(SmipevrPage);
  }
  goCM(){
    this.navCtrl.setRoot(CmipevrPage);
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
