import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.data.nit = '';
    this.data.cedula = '';
    this.http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  entrar(){
    this.navCtrl.setRoot(TabsPage);
  }


getRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    let nit = this.data.nit;
    let cedula = this.data.cedula;
    let postParams = {
      nit: this.data.nit,
      cedula: this.data.cedula
    }

    this.http.get('http://190.26.216.121:8080/wssst/afiliadoEmpresaActivo?tpEm=ni&docEm='+this.data.nit+'&tpAfiliado=cc&docAfiliado='+this.data.cedula)

      .subscribe(res => this.data = res.json(), data => {

        this.data.response = data['_body'];
        if(this.data.response.length>0){
        this.data.response=JSON.parse(this.data.response);
        console.log(this.data.response);
          if(this.data.response['documentoEmp']==nit && this.data.response['idPersona']==cedula && nit!="" && nit!=undefined){
            this.navCtrl.setRoot(TabsPage, {nit:nit, nombre1:this.data.response['nombre1'], nombre2:this.data.response['nombre2']});
        }
        }
        console.log(this.data.response.nombre1);
        //console.log(JSON.stringify(this.data));

       },
    );

  }
  /*
  get(){
    let nit = this.data.nit;
    let cedula = this.data.cedula;

    this.http.get('http://localhost:8080/api/name?nit='+this.data.nit+'&cedula='+this.data.cedula)
    .subscribe(res => {
      this.data = res.json();
      this.data.response = this.data['_body'];
      this.data.response=JSON.parse(this.data.response);
      if(this.data.response['nit']==nit && this.data.response['cedula']==cedula && nit!="" && nit!=undefined){
          this.navCtrl.setRoot(TabsPage);
        }
      console.log(this.data.response);

    })
  }*/


}
