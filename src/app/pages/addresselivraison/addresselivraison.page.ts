import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/nav.service';
import { EventsService } from '../../../app/events.service';
import {UserCommande} from '../../../app/store/models/user.commande.model';

@Component({
  selector: 'app-addresselivraison',
  templateUrl: './addresselivraison.page.html',
  styleUrls: ['./addresselivraison.page.scss'],
})
export class AddresselivraisonPage implements OnInit {
  public userCommande:UserCommande;
  constructor(  private navService: NavService,public events: EventsService) { }

  ngOnInit() {

    this.userCommande =this.events.getNavUserCommande();

    console.log("Valeur de usercommande:"+JSON.stringify(this.userCommande));
  }

}
