import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app/app.service';
import * as _ from 'lodash';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage  {

 // list items of this category
 public items: any;

 constructor(public itemService: AppService) {
   // get list items
   this.items = itemService.getWishList().subscribe(res => {
    // alert('valeur de res:' + JSON.stringify(res));
   }, err => {
    //alert('valeur de err:' + JSON.stringify(err));
   });
 }

      // get discount percent
      discountPercent(originPrice, salePrice) {
        return Math.round((salePrice - originPrice) * 100 / originPrice);
      }

      // remove item from wish list
      remove(index) {
        this.items.splice(index, 1);
      }
}
