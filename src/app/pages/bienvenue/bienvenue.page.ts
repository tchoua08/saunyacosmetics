import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { Router } from '@angular/router';
import {ProduitState} from '../../../app/produit.state';
import {Select, Store} from '@ngxs/store';
import { PrestationState } from 'src/app/prestation.state';
import { GadieState } from 'src/app/gadie.state';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {

  constructor(private store: Store, private route: Router) { }

 async ngOnInit() {
  Storage.set({
    key: 'connexion',
    value: 'false'
  });
    /*await Storage.get({ key: 'connexion' }).then(res => {
      if (isNullOrUndefined(res.value)) {
        Storage.set({
          key: 'connexion',
          value: 'false'
        });
      }else{
        Storage.set({
          key: 'validation',
          value: 'true'
        });
        this.route.navigateByUrl('', { replaceUrl: true });
      }
      });**/

  }


  async next(){
    await Storage.set({
      key: 'connexion',
      value: 'false'
    });
       await Storage.set({
      key: 'validation',
      value: 'true'
    });
       this.route.navigateByUrl('', { replaceUrl: true });

    }
    async seConnecter(){
      await Storage.set({
        key: 'connexion',
        value: 'false'
      });
      this.route.navigateByUrl('/login');
    }

   async creerCompte(){
      await Storage.set({
        key: 'connexion',
        value: 'false'
      });
      this.route.navigateByUrl('/register');
    }


}
