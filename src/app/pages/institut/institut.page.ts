import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { Router } from '@angular/router';
import {Agence} from '../../../app/store/models/agence.model';

import {AgenceState} from '../../Agence.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DeleteAgence, GetAgences, SetSelectedAgence} from '../../store/actions/agence.action';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-institut',
  templateUrl: './institut.page.html',
  styleUrls: ['./institut.page.scss'],
})
export class InstitutPage implements OnInit {
  agencesList = [];
  uneagence = '';
  agence = '';
  @Select(AgenceState.getAgenceList) agences!: Observable<Agence[]>;

  constructor(
    private store: Store, 
    private route: Router,
    private service: AppService,
    public events: EventsService
    ){}
 async ngOnInit() {
  await Storage.get({ key: 'agence' }).then(res => {
    this.agence = res.value;
    this.uneagence = res.value;
  });
  this.agenceService();
  this.store.dispatch(new GetAgences());
  }

  fndoRefresh(refresher) {

    setTimeout(() => {  this.agenceService();

                        refresher.complete();
    }, 2000);
  }


  async agenceService(){

    await this.agences.subscribe(res => {
      this.agencesList = res['data'] ;

    });
    }

   serviceValidation(){
      
    this.events.publishSomeData({
      agence: this.uneagence
    });
     Storage.set({
        key: 'agence',
        value: this.uneagence
     });

    

  }


}

