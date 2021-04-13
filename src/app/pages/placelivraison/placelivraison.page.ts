import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NavService } from 'src/app/nav.service';

import { EventsService } from '../../../app/events.service';
import {UserCommande} from '../../../app/store/models/user.commande.model';

@Component({
  selector: 'app-placelivraison',
  templateUrl: './placelivraison.page.html',
  styleUrls: ['./placelivraison.page.scss'],
})
export class PlacelivraisonPage implements OnInit {
  public userCommande:UserCommande;


  ngOnInit() {

    this.userCommande =this.events.getNavUserCommande();

    console.log("Valeur de usercommande:"+JSON.stringify(this.userCommande));
  }
  constructor(
    public events: EventsService,
    private _router: Router,
    private navService:NavService,
    private actRoute: ActivatedRoute
  ) { }

  navigation(){

     this._router.navigate(['/tabs/panier/paiement']);

}

}
