import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-pluscategorie',
  templateUrl: './pluscategorie.page.html',
  styleUrls: ['./pluscategorie.page.scss'],
})
export class PluscategoriePage implements OnInit {
  produits = [];
  produitsList = [];



  constructor(private app: AppService) { }

  ngOnInit() { this.service(); }

 async service(){
    this.produits = await this.app.getProduits();
    this.produitsList = _.uniqBy(this.produits,'idCategorie');


  }






}
