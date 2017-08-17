import { Component } from '@angular/core';
import { NavController, NavParams, Events, ViewController } from 'ionic-angular';
import { SedePage } from '../sede/sede';
import { UsuariosPage } from '../usuarios/usuarios';
import { SettingsPage } from '../settings/settings';
import { Http } from '@angular/http';
import { EmpresaPage } from '../empresa/empresa';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';


/**
 * Generated class for the DatosGeneralesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-datos-generales',
  templateUrl: 'datos-generales.html',
})
export class DatosGeneralesPage {
  public nit;
  public nombre;
  public tipo_documento;
  public identificacion;
  public razon;
  public codigo_actividad;
  public direccion;
  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public events: Events) {
    this.navParams = navParams;
    this.nit = navParams.get('nit');
    this.nombre = navParams.get('nombre');
    this.tipo_documento = "";

    console.log(this.nit);
    //console.log(navParams.get('nombre'));
    events.subscribe('change-tab', (tab, nombre, nit) => {
      this.nit = nit;
      this.nombre = nombre;
    });

    this.http.get('http://localhost:8080/api/empresa?nit='+ this.nit)
    
          .subscribe(res => this.data = res.json(), data => {
            
            this.data.response = data['_body'];
            //if(this.data.response.length>0){
            this.data.response=JSON.parse(this.data.response);
            
            //}
            console.log(this.data.response['tipo_documento']);
            console.log(this.data.response);
            console.log(this.data.response.tipo_documento);
            this.tipo_documento = this.data.response['tipo_documento'];
            this.identificacion = this.data.response['identificacion'];
            this.razon = this.data.response['razon'];
            this.codigo_actividad = this.data.response['codigo_actividad'];
            this.direccion = this.data.response['direccion'];
           },
        );

  }

  ionViewDidLoad() {
    
    

    console.log('ionViewDidLoad DatosGeneralesPage');
  }
  goSede(){
    this.navCtrl.setRoot(SedePage);
  }
  goUsuarios(){
    this.navCtrl.setRoot(UsuariosPage);
  }
goSettings(){
    this.navCtrl.push(SettingsPage);
  }

  getRequest() {
 
    let nit = this.data.nit;
    let cedula = this.data.cedula;

    this.http.get('http://http://localhost:8080/api/empresa?nit='+ this.data.nit)

      .subscribe(res => this.data = res.json(), data => {
        
        this.data.response = data['_body'];
        if(this.data.response.length>0){
        this.data.response=JSON.parse(this.data.response);
        }
        console.log(this.data.response);
        //console.log(JSON.stringify(this.data));
        
       },
    );

  }
}
