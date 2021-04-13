import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class NavService {

    constructor(private navCtrl: NavController) { }

    goBack() {
        this.navCtrl.back();
    }

}
