import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the CreacionEmpresaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-creacion-empresa',
  templateUrl: 'creacion-empresa.html',
})
export class CreacionEmpresaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreacionEmpresaPage');
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
