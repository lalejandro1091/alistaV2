import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReportarIncidentePage } from '../reportar-incidente/reportar-incidente';
import { ConsultarIncidentePage } from '../consultar-incidente/consultar-incidente';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the ReporteIncidentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-reporte-incidente',
  templateUrl: 'reporte-incidente.html',
})
export class ReporteIncidentePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReporteIncidentePage');
  }

  goRI(){
    this.navCtrl.setRoot(ReportarIncidentePage);
  }
  goCI(){
    this.navCtrl.setRoot(ConsultarIncidentePage);
  }
  goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
