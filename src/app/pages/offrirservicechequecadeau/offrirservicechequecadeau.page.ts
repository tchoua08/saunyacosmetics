import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { NavService } from 'src/app/nav.service';
@Component({
  selector: 'app-offrirservicechequecadeau',
  templateUrl: './offrirservicechequecadeau.page.html',
  styleUrls: ['./offrirservicechequecadeau.page.scss'],
})
export class OffrirservicechequecadeauPage implements OnInit {

  montant:number=0;
  id:number = 0;
  reservations = [];
  reservationsList = [];
  constructor(
    private app: AppService,
    private navService:NavService,
    private route: ActivatedRoute,
    private router: Router
    ) {

    this.id = this.route.snapshot.params.id;
    }

    ngOnInit() {
      this.service();
    }

    async service(){
       this.reservations = await this.app.getReservations();

       this.reservationsList = _.filter(
        this.reservations, (o) => {
          return o.id == this.id;
        });
     }
}
