import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {Categorie} from '../../store/models/categorie.model';
import { Router, ActivatedRoute } from '@angular/router';


import {Produit} from '../../../app/store/models/produit.model';
import {ProduitState} from '../../../app/produit.state';
import {Select, Store} from '@ngxs/store';
import {AddProduit, DeleteProduit, GetProduits, SetSelectedProduit} from '../../../app/store/actions/produit.action';
import { EventsService } from '../../events.service';
import { ModalController, PopoverController } from '@ionic/angular';

import { TabAttributePage } from '../tab-attribute/tab-attribute.page';
import { PopoverComponent } from '../popover/popover.component';
// gadie
import {Gadie} from '../../../app/store/models/gadie.model';
import {GadieState} from '../../../app/gadie.state';
import {AddGadie, DeleteGadie, GetGadies, SetSelectedGadie} from '../../../app/store/actions/gadie.action';
import { NavService } from '../../../app/nav.service';


@Component({
  selector: 'app-subcatproduit1',
  templateUrl: './subcatproduit1.page.html',
  styleUrls: ['./subcatproduit1.page.scss'],
})
export class Subcatproduit1Page implements OnInit {

  produitsList = [];
  produitsListBy = [];
  cures = [];
  curesList = [];
  carteFidelite = [];
  start = 'non';
  toggled = false;
  categories = [];
  imageUrl = 'https://dev.saunya.com/public/';
  checktype = 'cours';
  fullCheckinList: any = null;

  uneproduit = '';
  id = '';
  public viewType = '1';
  public voirPanier = 'non';
  public prix = 0;
  public nomproduit = '';
  public leproduit: any;
  somme = 0;
  sommeub = 0;
  items: Gadie[] = [];
  itemsFilter = [];
  panier: Gadie;
  quantity = 1 ;
  @Select(GadieState.getGadieList) gadies!: Observable<Gadie[]>;
  modelData: any;

  constructor(public events: EventsService,
              private store: Store,
              private route: ActivatedRoute,
              private router: Router,
              private navService: NavService,
              public modalCtrl: ModalController,
              public popoverController: PopoverController,
              private app: AppService
      ) {

    this.id = this.route.snapshot.params.id;

   }

  ngOnInit() {

    this.categorieService();
   }



  async categorieService(){
    this.start = 'oui';
    await this.app.fetchCategoriesByUrl(this.id).subscribe(res => {
    this.start = 'non';
    this.categories = _.filter(
      res['data'], (o) => {
        return o.is_service === 0;
      });

    this.fullCheckinList = this.categories;

    });

    await this.app.fetchProduitsByUrl(this.id).subscribe(res => {
     this.start = 'non';
     this.produitsList = res['data'];
     this.produitsListBy = this.produitsList;
      });


  }



  toggleSearchbar() {
    this.toggled = true;
  }

  toggleCancel(){
    this.toggled = false;
  }

  onInput(ev: any){
    const val = ev.target.value;

    if (val && val.trim() !== '' && this.categories != null) {

      this.categories = this.categories.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));

      });
    }
    if (val === '' && this.categories != null){ this.categories = this.fullCheckinList; }

  }


  onCancel(ev: any){
    this.toggled = false;
  }

  goCategorie(categorie: any){
     this.voirPanier = 'non';
     this.router.navigate(['/tabs/boutique/subcatproduit1/' + categorie.id]);

  }


  goProduit(unProduit: any){
    const produit: Produit = {
      id: unProduit.id,
      name: unProduit.name,
      is_service: unProduit.is_service,
      thumbnail_image: unProduit.thumbnail_image,
      base_price: unProduit.base_price,
      unit_price: unProduit.unit_price,
      rating: unProduit.rating,
      sales: unProduit.sales,
      links: {
          details: unProduit.links.details,
      },
      description: unProduit.description
   };

    this.events.setNavData(produit);
    this.voirPanier = 'non';
    this.router.navigate(['/tabs/boutique/detailproduitfin/' + 1]);
  }



  // swith to grid view
  viewGrid(type: string) {
    this.viewType = type;
  }

    // show filter modal
    async openAttribute(tabName) {
      // show modal
      const modal = await this.modalCtrl.create({
        component: TabAttributePage
      });

      this.produitsList = this.produitsListBy ;
      modal.onDidDismiss().then((modelData) => {

        if (modelData !== null) {
          this.modelData = modelData.data;
          let res =   this.modelData.split("-");
          let val0 =parseInt(res[0],10);
          let val1 =parseInt(res[1],10);
          if (val0===val1){
            this.produitsList = this.produitsListBy ;
          }else{

            this.produitsList = _.filter( this.produitsList, result =>
              result.unit_price<=val1 && result.unit_price>=val0)

          }


        }
      });

      await modal.present();
    }




    async presentPopover(ev: any) {
      const popover = await this.popoverController.create({
        component: PopoverComponent,
        cssClass: 'my-custom-class',
        event: ev,
        translucent: true
      });
      popover.onDidDismiss().then((modelData) => {

        if (modelData !== null) {
          this.modelData = modelData.data;

          if (this.modelData==='decroissant'){

            this.produitsList = _.sortBy(this.produitsList, result =>result.unit_price)

          }else{

            this.produitsList = _.sortBy(this.produitsList, result =>result.unit_price)

          }


        }
      });
      return await popover.present();
    }

        // choose sort by
         addPanier() {

          const produit: Produit = {

            id: this.leproduit.id,
            name: this.leproduit.name,
            is_service: this.leproduit.is_service,
            thumbnail_image: this.leproduit.thumbnail_image,
            base_price: this.leproduit.base_price,
            unit_price: this.leproduit.unit_price,
            rating: this.leproduit.rating,
            sales: this.leproduit.sales,
            links: {
                details: this.leproduit.links.details,
            },
            description: this.leproduit.description
         };

          this.panier = {
          produit,
          type : produit.is_service,
          id: produit.id,
          quantite: this.quantity,
          prixTotal: produit.unit_price
       };
          this.voirPanier = 'non';
          this.quantity = 1;
          this.store.dispatch(new AddGadie(this.panier));


    }

         showPanier(produit: Produit){
         this.voirPanier = 'oui';
         this.prix = produit.unit_price;
         this.nomproduit = produit.name;

         this.leproduit = produit;

        }

        fermer(){
          this.voirPanier = 'non';
        }

        async decreaseCartItem() {
          if (this.quantity > 1) {
           this.quantity = this.quantity - 1;
          }

        }

        async increaseCartItem() {

          this.quantity = this.quantity + 1;
          }




}
