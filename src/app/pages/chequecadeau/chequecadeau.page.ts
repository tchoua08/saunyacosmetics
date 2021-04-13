import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-chequecadeau',
  templateUrl: './chequecadeau.page.html',
  styleUrls: ['./chequecadeau.page.scss'],
})
export class ChequecadeauPage implements OnInit {
  url = 'https://placem.at/people?overlay_color=eb7a85&w=600&h=290';
  readonly:boolean;
  montant:number=0;
 slideOptsTop = {
   spaceBetween: 0,
   slidesPerView: 1.15,
 };

 slideOptsThumbs = {
   spaceBetween: 2,
   slidesPerView: 1.65,
 };
  constructor(private navService: NavService) { this.readonly=true }

  ngOnInit() {
  }

  passeUrl(urly: string){
    this.url = urly;
  }



}
