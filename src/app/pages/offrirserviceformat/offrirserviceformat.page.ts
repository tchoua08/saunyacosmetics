import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-offrirserviceformat',
  templateUrl: './offrirserviceformat.page.html',
  styleUrls: ['./offrirserviceformat.page.scss'],
})
export class OffrirserviceformatPage implements OnInit {
  reservations = [];
  reservationsList = [];
  id:number = 0;




  constructor(
    private navService:NavService,
    private app: AppService,
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

