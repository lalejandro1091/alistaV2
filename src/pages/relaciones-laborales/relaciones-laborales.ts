import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConsultarRlPage } from '../consultar-rl/consultar-rl';
import { NotificarInconsistenciaPage } from '../notificar-inconsistencia/notificar-inconsistencia';
import { CargarRltPage } from '../cargar-rlt/cargar-rlt';
import { ConsultarRltPage } from '../consultar-rlt/consultar-rlt';
import { CreacionEmpresaPage } from '../creacion-empresa/creacion-empresa';
import { SettingsPage } from '../settings/settings';


/**
 * Generated class for the RelacionesLaboralesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-relaciones-laborales',
  templateUrl: 'relaciones-laborales.html',
})
export class RelacionesLaboralesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelacionesLaboralesPage');
  }

  goRL(){
    this.navCtrl.setRoot(ConsultarRlPage);
  }
  goNI(){
    this.navCtrl.setRoot(NotificarInconsistenciaPage);
  }
  goCRLT(){
    this.navCtrl.setRoot(CargarRltPage);
  }
  goCORLT(){
    this.navCtrl.setRoot(ConsultarRltPage);
  }
  goCEA(){
    this.navCtrl.setRoot(CreacionEmpresaPage);
  }
  goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
