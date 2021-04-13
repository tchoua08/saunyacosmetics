import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import {Produit} from '../../../app/store/models/produit.model';
import {ProduitState} from '../../../app/produit.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DeleteProduit, GetProduits, SetSelectedProduit} from '../../../app/store/actions/produit.action';

// gadie
import {Gadie} from '../../../app/store/models/gadie.model';
import {GadieState} from '../../../app/gadie.state';
import {AddGadie,DeleteGadie, GetGadies, SetSelectedGadie} from '../../../app/store/actions/gadie.action';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { EventsService } from '../../events.service';
import { NavService } from '../../../app/nav.service';

@Component({
  selector: 'app-detailproduitfin',
  templateUrl: './detailproduitfin.page.html',
  styleUrls: ['./detailproduitfin.page.scss'],
})
export class DetailproduitfinPage implements OnInit {

  produitsList:any;
  id = '';
  categorie = '';
  somme:number=0;
  imageUrl="https://dev.saunya.com/public/";

  constructor(
    public events: EventsService,
    public sanitizer:DomSanitizer,
    private app: AppService,
    private store: Store,
    private navService:NavService,
    private route: ActivatedRoute,
    private router: Router
    ) {

     this.produitsList = this.events.getNavData();
   // this.id = this.route.snapshot.params.id;
   // this.store.dispatch(new GetProduits());


   }

  ngOnInit() {


   // this.produitService();



   }

      /* async produitService(){
        await this.app.fetchProduitsByUrl(this.id).subscribe(res => {
          alert("res:"+JSON.stringify(res));
          this.produitsList =res['data'];

          });
       }*/

  /*  async produitService(){

    await this.produits.subscribe(res => {
      this.produitsList = _.filter(
      res['data'], (o) => {
        return o.id == this.id;
      });


    });

  }*/



  addGadie(){
    const panier :Gadie ={
       produit : this.produitsList,
       type : this.produitsList.is_service,
       id: this.produitsList.id,
       quantite:1,
       prixTotal:this.produitsList.unit_price


    }


    this.store.dispatch(new AddGadie(panier));
  }

}
