import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import {Prestation} from '../../../app/store/models/prestation.model';
import {PrestationState} from '../../../app/prestation.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DeletePrestation, GetPrestations, SetSelectedPrestation} from '../../../app/store/actions/prestation.action';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-detailreservation',
  templateUrl: './detailreservation.page.html',
  styleUrls: ['./detailreservation.page.scss'],
})
export class DetailreservationPage implements OnInit {
  reservations = [];
  reservationsList = [];
  id:number = 0;
  categorie:string = "";
  imageUrl="https://dev.saunya.com/public/";
  agence='';


  @Select(PrestationState.getPrestationList) prestations!: Observable<Prestation[]>;


  constructor(
    public sanitizer:DomSanitizer,
    private store: Store,
    private app: AppService,
    private route: ActivatedRoute,
    private router: Router
    ) {

    this.id = this.route.snapshot.params.id;
    this.categorie = this.route.snapshot.params.categorie;


  }

  async ngOnInit() {
    await Storage.get({ key: 'agence' }).then(res => {
      this.agence = res.value;
    });
    this.store.dispatch(new GetPrestations());
   this.reservationService();

 }

  async reservationService(){

  await this.prestations.subscribe(res=>{
    this.reservationsList = _.filter(
    res['data'], (o) => {
      return o.cat_id == this.id;
    });

    this.reservationsList = _.filter(
      this.reservationsList, (o) => {
        return  o.is_service==1;
      });
  })
  }


}
