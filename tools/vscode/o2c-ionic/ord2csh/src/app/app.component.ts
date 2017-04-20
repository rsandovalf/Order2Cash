
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {Requeri} from '../pages/requeri/requeri';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mycontent') menu : NavController;
  rootPage:any = HomePage;
  reqs = Requeri;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irSeccion(seccion:any){
    this.menu.setRoot(seccion);
    this.menuCtrl.close();
  }
  irHome(){
    this.menu.setRoot(this.rootPage);
    this.menuCtrl.close();
  }
}

