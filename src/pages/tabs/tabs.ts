import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EmpresaPage } from '../empresa/empresa';
import { RendicionCuentasPage } from '../rendicion-cuentas/rendicion-cuentas';
import { ComunicacionPage } from '../comunicacion/comunicacion';
import { IpevrPage } from '../ipevr/ipevr';
import { AdministracionEppPage } from '../administracion-epp/administracion-epp';
import { ReporteIncidentePage } from '../reporte-incidente/reporte-incidente';
import { RaciPage } from '../raci/raci';
import { Tabs, Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { LoginPage } from '../login/login';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


@ViewChild(Tabs) tabs: Tabs;
  tab1Root = EmpresaPage;
  tab1Params = { nit: this.navParams.get('nit'), nombre: this.navParams.get('nombre') };

  tab2Root = RendicionCuentasPage;
  tab3Root = ComunicacionPage;
  tab4Root = IpevrPage;
  tab5Root = AdministracionEppPage;
  tab6Root = ReporteIncidentePage;
  tab7Root = RaciPage;
  tab7Icon = "actos1";


  constructor(public navCtrl: NavController, public events: Events, public navParams: NavParams, public viewController: ViewController) {
    console.log(this.navCtrl.isActive('Empresa'));
    this.tab1Params.nit = navParams.get('nit');
    this.tab1Params.nombre = navParams.get('nombre');
    events.subscribe('change-tab', (tab, nombre) => {
      //this.tab1Params.nit = nit;
      this.tabs.select(tab);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.tab1Params.nombre);

  }

  public isActive(pageName: string): boolean {
    return this.navCtrl.getActive().name === pageName;

}
}
