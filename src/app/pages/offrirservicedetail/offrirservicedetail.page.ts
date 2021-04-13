import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-offrirservicedetail',
  templateUrl: './offrirservicedetail.page.html',
  styleUrls: ['./offrirservicedetail.page.scss'],
})

export class OffrirservicedetailPage implements OnInit {
  reservations = [];
  reservationsList = [];
  id:number = 0;
  categorie:string = "";



  constructor(
    private navService:NavService,
    private app: AppService,
    private route: ActivatedRoute,
    private router: Router
    ) {

    this.id = this.route.snapshot.params.id;
    this.categorie = this.route.snapshot.params.categorie;

  }

  ngOnInit() {
    this.service();
  }

  async service(){
     this.reservations = await this.app.getReservations();

     this.reservationsList = _.filter(
      this.reservations, (o) => {
        return o.idCategorie == this.id;
      });
   }


}

