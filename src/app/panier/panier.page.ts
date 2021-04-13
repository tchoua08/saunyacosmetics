import { Component, OnInit,ViewChild } from '@angular/core';
import {AppService} from '../../app/app.service';
import * as _ from 'lodash';
import { ActionSheetController, ModalController } from '@ionic/angular';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
// gadie
import {Gadie} from '../../app/store/models/gadie.model';
import {GadieState} from '../../app/gadie.state';
import {UpdateGadie,AddGadie, DeleteGadie, GetGadies, SetSelectedGadie} from '../../app/store/actions/gadie.action';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { IonInfiniteScroll } from '@ionic/angular';
import {UserCommande} from '../../app/store/models/user.commande.model';
import { EventsService } from '../../app/events.service';

import {Booking} from '../../app/store/models/booking.model';
import {BookingState} from '../../app/booking.state';
import {AddBooking, DeleteBooking, GetBookings, SetSelectedBooking} from '../../app/store/actions/booking.action';

import {Produit} from '../../app/store/models/produit.model';
import {ProduitState} from '../../app/produit.state';
import {AddProduit, DeleteProduit, GetProduits, SetSelectedProduit} from '../../app/store/actions/produit.action';
import { TablivraisonPage } from '../pages/tablivraison/tablivraison.page';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  public viewType = '1';
  public voirPanier = 'non';
  public prix:number =0;
  public laCommande:any;
  public laPrestation:any;
  public leprix:number =0;
  prestationsList:any;
  commandes = [];
  somme = 0;
  sommeub =0;
  items:Gadie[]=[];
  itemsFilter=[];
  quantity:number =1 ;
  idCommande:number=1;
  panier :Gadie;
  imageUrl="https://dev.saunya.com/public/";
  @Select(GadieState.getGadieList) gadies!: Observable<Gadie[]>;

  @Select(BookingState.getBookingList) bookings!: Observable<Booking[]>;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    public sanitizer:DomSanitizer,
    private navService: NavService,
    private store: Store,
    private router: Router,
    public modalCtrl: ModalController,
    private app: AppService,
    public events: EventsService
     ) { }

   ngOnInit() {

    this.store.dispatch(new GetGadies());

    this.store.dispatch(new GetBookings());

    this.bookings.subscribe(res => {
      const itemsub = res;
      this.sommeub = _.sumBy(itemsub, function(item) {
        return item.prestation.unit_price;
    });
    });

    this.gadies.subscribe(res => {
      this.items = res;
      this.itemsFilter = _.uniqBy(this.items,'id');
      this.somme = _.sumBy(this.itemsFilter, function(item) {
        return item.prixTotal;

      });


    });


     }

     async delGadie(id: number){
      this.store.dispatch(new DeleteGadie(id));
      await this.gadies.subscribe(res => {
        this.items = res;
        this.itemsFilter = _.uniqBy(this.itemsFilter,'id');
        this.somme = _.sumBy(this.itemsFilter, function(item) {
          return item.prixTotal;
      });

     });
    }

  async service(){
    // this.commandes = await this.app.getCommandes();

   }

   loadData(event) {
    setTimeout(() => {

      event.target.complete();

      if (this.items.length == 3) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  async decreaseCartItem() {
    if (this.laCommande.quantite>=2){
      this.quantity =this.quantity-1;
      this.laCommande.quantite =this.laCommande.quantite-1;
      this.laCommande.prixTotal =this.laCommande.produit.unit_price*this.laCommande.quantite;
      await this.gadies.subscribe(res => {
        this.items = res;
        this.items = _.uniqBy(this.items,'id');
        this.somme = _.sumBy(this.items, function(item) {
          return item.prixTotal;
      });

     });

    }

  }

  async increaseCartItem() {

    this.quantity =this.quantity+1;
  this.laCommande.quantite =this.laCommande.quantite+1;
  this.laCommande.prixTotal =this.laCommande.produit.unit_price*this.laCommande.quantite;
  await this.gadies.subscribe(res => {
    this.items = res;
    this.itemsFilter = _.uniqBy(this.itemsFilter,'id');
    this.somme = _.sumBy(this.itemsFilter, function(item) {
      return item.prixTotal;
  });

 });

  }

  btnLivraison(){
      let usercommande:UserCommande={
        user:null,
        panier:this.items,
        type: 1,
        modeLivraison: '',
        coordonner:null,
        somme:  this.somme
      }

    this.events.setNavUserCommande(usercommande);

  }

  async delBooking(id: number){
    this.store.dispatch(new DeleteBooking(id));
    await this.bookings.subscribe(res => {
      const items = res;
      this.sommeub = _.sumBy(items, function(item) {
        return item.prestation.unit_price;
    });

   });
  }
  showBooking(commande:any){
    this.voirPanier = 'oui';
    this.idCommande =commande.id;
    this.laPrestation =commande;
    this.leprix =commande.produit.unit_price;
    this.quantity =commande.quantite;
  }
  showPanier(commande:any){
    this.voirPanier = 'oui';
    this.idCommande =commande.id;
    this.laCommande =commande;
    this.leprix =commande.produit.unit_price;
    this.quantity =commande.quantite;

   }

   fermer(){
     this.voirPanier = 'non';
   }




   addPanier() {

   /* this.panier = {
    produit : this.laCommande.produit,
    type : this.laCommande.produit.is_service,
    id: this.laCommande.id,
    quantite:this.quantity,
    prixTotal:this.laCommande.prixTotal
   }**/
    this.voirPanier = 'non';
    this.quantity =1;
 /*this.store.dispatch(new UpdateGadie(this.panier,this.laCommande.id));**/


    }


  // tslint:disable-next-line:adjacent-overload-signatures
  async btnOpenLivraison() {
    // show modal
    const modal = await this.modalCtrl.create({
      component: TablivraisonPage
    });

    await modal.present();
  }

   btnOpenPaiement(){
    this.router.navigate(['/tabs/panier/paiement'])
  }

  btnOpenBooking(){
    this.router.navigate(['/tabs/panier/booking'])
  }

}
