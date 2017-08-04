import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';

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
    this.data.user = '';
    this.data.pass = '';
    this.http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  entrar(){
    this.navCtrl.setRoot(TabsPage);
  }

  submit() {
  var link = 'http://tunesources.tk/owncloud/php/login.php';
  var myData = JSON.stringify({user: this.data.user, pass: this.data.pass});
 
  this.http.post(link, myData)
  .subscribe(data => {
  this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
  if(this.data.response == "success"){
    this.navCtrl.setRoot(HomePage);
  }
  }, error => {
  console.log("Oooops!");
  });
  }

}
