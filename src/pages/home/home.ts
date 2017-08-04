import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
   shownGroup = null;
  constructor(public navCtrl: NavController) {

  }

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
      
  openPage(component){
    this.navCtrl.setRoot(component);
  }
  goSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
