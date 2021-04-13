import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NavService } from 'src/app/nav.service';
import { EventsService } from '../../../app/events.service';
import {UserCommande} from '../../../app/store/models/user.commande.model';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {

  public reservation: string;
  public textbouton: string ='Choisir un point de livraison';
  public userCommande:UserCommande;
  constructor(
    private navService: NavService,
    public events: EventsService,
    private _router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  Handler(event) {
    this.reservation = event.target.value;
    if (event.target.value === 'place'){
      this.textbouton = 'Choisir un point de livraison';
   }else{
     this.textbouton = 'Ajouter une adresse de livraison';
   }
  }
  leave(event) {

  }
  go(event) {
    if (event.target.value === 'place'){
       this.textbouton = 'Choisir un point de livraison';
    }else{
      this.textbouton = 'Ajouter une adresse de livraison';
    }
  }
  navigation(){
       if (this.reservation === 'livrer'){

        this._router.navigate(['/tabs/panier/addresselivraison']);

        this.userCommande =this.events.getNavUserCommande();
        this.userCommande.type =1 ;
        this.userCommande.modeLivraison='Ajouter une adresse de livraison' ;
        this.events.setNavUserCommande(this.userCommande);

       }

       if (this.reservation === 'place'){

        this._router.navigate(['/tabs/panier/placelivraison']);
        this.userCommande =this.events.getNavUserCommande();
        this.userCommande.type =0;
        this.userCommande.modeLivraison='Choisir un point de livraison' ;
        this.events.setNavUserCommande(this.userCommande);


       }

  }

}
