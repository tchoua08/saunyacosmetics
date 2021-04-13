import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { Router } from '@angular/router';
import {Agence} from '../../../app/store/models/agence.model';

import {AgenceState} from '../../agence.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DeleteAgence, GetAgences, SetSelectedAgence} from '../../store/actions/agence.action';

import { EventsService } from '../../events.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  agencesList = [];
  uneagence = '';
  @Select(AgenceState.getAgenceList) agences!: Observable<Agence[]>;
  nextPageToken: any;
  constructor(
    private store: Store,
    private route: Router,
    private service: AppService,
    public events: EventsService
    ){}
  ngOnInit() {
      this.agenceService();
      this.store.dispatch(new GetAgences());
  }


   radioSelect(event: any){
    this.uneagence = event.name;
    

  }

  fndoRefresh(refresher) {

    setTimeout(() => {
      this.agenceService();

      refresher.target.complete();

    }, 2000);
  }

  async agenceService(){

    await this.agences.subscribe(res => {
      this.agencesList = res['data'] ;
    });
    }

  async serviceValidation(){
      if (this.uneagence !== ''){
         await Storage.set({
        key: 'agence',
        value: this.uneagence
       });

         await Storage.set({
        key: 'validation',
        value: 'true'
      });
         this.route.navigateByUrl('', { replaceUrl: true });

      }


  }




}
