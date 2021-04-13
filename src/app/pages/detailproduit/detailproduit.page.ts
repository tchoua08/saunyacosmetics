import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import {Produit} from '../../../app/store/models/produit.model';
import {ProduitState} from '../../../app/produit.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DeleteProduit, GetProduits, SetSelectedProduit} from '../../../app/store/actions/produit.action';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.page.html',
  styleUrls: ['./detailproduit.page.scss'],
})
export class DetailproduitPage implements OnInit {


  produitsList = [];
  id:number = 0;
  categorie:string = "";
  imageUrl="https://dev.saunya.com/public/";

  @Select(ProduitState.getProduitList) produits!: Observable<Produit[]>;

  constructor(
    public sanitizer:DomSanitizer,
    private app: AppService,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
    ) {

    this.id = this.route.snapshot.params.id;
    this.categorie = this.route.snapshot.params.categorie;

  }

  ngOnInit() {

      this.store.dispatch(new GetProduits());
     this.produitService();

   }

    async produitService(){

    await this.produits.subscribe(res=>{
      this.produitsList = _.filter(
      res['data'], (o) => {
        return o.cat_id == this.id;
      });

      this.produitsList = _.filter(
        this.produitsList, (o) => {
          return  o.is_service==0;
        });
    })
    }




}
