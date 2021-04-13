import { Component , ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {Platform,AlertController,IonRouterOutlet} from '@ionic/angular';
import {Location} from '@angular/common';
const { Storage,SplashScreen  } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet,{static : true}) routerOutlet: IonRouterOutlet;
  constructor(
    private platform:Platform,
    private location: Location,
    private alertController:AlertController
    ) {
     Storage.set({
      key: 'validation',
      value: 'false'
    });
     this.initSplash();
     this.backButtonEvent();
  }

  async initSplash(){
    await SplashScreen.hide();
  }

  backButtonEvent(){
    this.platform.backButton.subscribeWithPriority(10,()=>{
      if (!this.routerOutlet.canGoBack()){

        this.location.back();

      }else{
        this.location.back();
      }

    })
  }
}
