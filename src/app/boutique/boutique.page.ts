import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app/app.service';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {Categorie} from '../../app/store/models/categorie.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.page.html',
  styleUrls: ['./boutique.page.scss'],
})
export class BoutiquePage implements OnInit {
  produits = [];
  produitsList = [];
  cures = [];
  curesList = [];
  carteFidelite = [];
  toggled = false;
  categories = [];
  imageUrl = 'https://dev.saunya.com/public/';
  checktype = 'cours';
  fullCheckinList: any = null;

  uneproduit = '';


  constructor(private router: Router,private app: AppService) { }

  ngOnInit() {
    this.service();
    this.categorieService();
   }



 async service(){
    this.produits = await this.app.getProduits();
    this.produitsList = _.uniqBy(this.produits, 'idCategorie');

    this.cures = await this.app.getCures();
    this.curesList = _.uniqBy(this.cures, 'idCategorie');

    this.carteFidelite = await this.app.getCarteFidelite();
  }


  async categorieService(){
  await this.app.fetchCategoriesAll().subscribe(res => {

    this.categories = _.filter(
      res['data'], (o) => {
        return o.is_service == 0;
      });


    this.fullCheckinList = this.categories;

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

  goCategorie(categorie:any){

     this.router.navigate(['/tabs/boutique/subcatproduit1/'+categorie.id])

  }


}
