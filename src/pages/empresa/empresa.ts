import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { DatosGeneralesPage } from '../datos-generales/datos-generales';
import { RelacionesLaboralesPage } from '../relaciones-laborales/relaciones-laborales';
import { ConsultarRlPage } from '../consultar-rl/consultar-rl';
import { NotificarInconsistenciaPage } from '../notificar-inconsistencia/notificar-inconsistencia';
import { CargarRltPage } from '../cargar-rlt/cargar-rlt';
import { ConsultarRltPage } from '../consultar-rlt/consultar-rlt';
import { CreacionEmpresaPage } from '../creacion-empresa/creacion-empresa';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';


/**
 * Generated class for the EmpresaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-empresa',
  templateUrl: 'empresa.html',
})
export class EmpresaPage {
  public nit;
  public nombre;

  diseases = [
    { title: "Datos Empresa", icon:"datos", items:[{title: "Datos Generales", component: DatosGeneralesPage, id: '1'}] },
    { title: "Relaciones Laborales", icon:"relaciones",
    items:[{title: "Consulta de Relaciones Laborales", component:ConsultarRlPage},
     {title:"Notificar Inconsistencias", component:NotificarInconsistenciaPage},
    {title:"Cargar Relaciones Laborales de Terceros", component:CargarRltPage},
    {title:"Consultar Relaciones Laborales de Terceros", component:ConsultarRltPage},
    {title:"Creacion de Empresas Asociadas", component:CreacionEmpresaPage}]},
    
  ];
   shownGroup = null;



  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.navParams = navParams;
    this.nit = this.navParams.get('nit');
    this.nombre = this.navParams.get('nombre');
    events.subscribe('change-tab', (tab, nombre, nit) => {
      this.nit = nit;
      this.nombre = nombre;
    });
          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaPage');
    console.log(this.nombre, this.nit);
  }
/*  datosGenerales(){
    this.navCtrl.setRoot(DatosGeneralesPage, {nit: this.navParams.get('nit'), nombre: this.nombre});
    console.log(this.nombre);
  }
  relacionesLaborales(){
    this.navCtrl.setRoot(RelacionesLaboralesPage);
  }*/

      toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };
      
  openPage(id){
    switch(id){
      case '1':
      this.navCtrl.setRoot(DatosGeneralesPage, {nit: this.navParams.get('nit'), nombre: this.nombre});
      break;

    }
  }
  goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
