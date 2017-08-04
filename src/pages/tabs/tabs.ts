import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

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

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EmpresaPage;
  tab2Root = RendicionCuentasPage;
  tab3Root = ComunicacionPage;
  tab4Root = IpevrPage;
  tab5Root = AdministracionEppPage;
  tab6Root = ReporteIncidentePage;
  tab7Root = RaciPage;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
}
