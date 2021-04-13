
import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import * as _ from 'lodash';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-offrirservice',
  templateUrl: './offrirservice.page.html',
  styleUrls: ['./offrirservice.page.scss'],
})
export class OffrirservicePage implements OnInit {

  reservations =[];
  reservationsList = [];
  toggled=false;


  constructor(private navService:NavService, private app:AppService) { }

  ngOnInit() { this.service(); }

  service(){
    this.reservations =this.app.getReservations();
    this.reservationsList = _.uniqBy(this.reservations,'idCategorie');

  }

  toggleSearchbar() {
    this.toggled = true;
  }

  toggleCancel(){
    this.toggled = false;
  }

  onInput(e:string){

  }

  onCancel(e:string){
    this.toggled = false;
  }


}

